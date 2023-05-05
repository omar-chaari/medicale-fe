import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import frLocale from '@fullcalendar/core/locales/fr';
import { DatatableService } from 'src/app/services/datatable.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

registerLocaleData(localeFr);

@Component({
  selector: 'app-calendrier-disponibilites',
  templateUrl: './calendrier-disponibilites.component.html',
  styleUrls: ['./calendrier-disponibilites.component.css']
})
export class CalendrierDisponibilitesComponent implements OnInit {

  showForm = false;
  selectedDate: string = "";
  selectedTime: string = "";
  message_success: string = "";
  message_error: string = "";
  professional:number= 0;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    initialView: 'timeGridWeek',
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' },
      {
        start: '2023-04-14T08:00:00',
        end: '2023-04-14T12:00:00',
        color: 'Moccasin',
        rendering: 'background',
      },
      {
        start: '2023-04-14T15:00:00',
        end: '2023-04-14T16:15:00',
        color: 'Moccasin',
        rendering: 'background',
      },
      {
        start: '2023-04-17',
        end: '2023-04-18',
        color: 'Moccasin',

        rendering: 'background',

      },
    ],
    locale: frLocale,
    slotMinTime: '08:00',
    slotMaxTime: '18:00',
    allDaySlot: false,
    height: 'auto',
    businessHours: {
      startTime: '08:00',
      endTime: '18:00',
      daysOfWeek: [1, 2, 3, 4, 5], // Lundi à vendredi
    },
  };



  constructor(

    private datatableService: DatatableService,
    private route: ActivatedRoute



  ) {

    this.route.params.subscribe(params => {
      this.professional = params['id'];
    });


   }

  ngOnInit(): void {
  }


  handleDateClick(event: any): void {
    this.selectedDate = event.dateStr;
    const { date, time } = this.extractDateAndTime(this.selectedDate);

    this.selectedDate = date;
    this.selectedTime = time;

    this.showForm = true;
  }
  onFormCancel(): void {
    this.showForm = false;
  }

  onSubmit(form: NgForm): void {
    console.log('Formulaire soumis:', form.value);

    const table = "appointements";

    const jsonString = this.getCookie("user_data");

    // Parse the JSON string back into an object
    let patient = 0;
    if (jsonString !== null) {

      const data = JSON.parse(jsonString);
 
      patient = data.user_id;
    }

    const professional = form.value.professional;
    const date_debut = form.value.date + " " + form.value.time + ":00";
    const date_fin = this.addMinutes(date_debut, 30);

    const record = {
      "patient": patient,
      "professional": professional,
      "date_debut": date_debut,
      "date_fin": date_fin
    };


    this.datatableService.create(record, table).subscribe(
      (data: any) => {
        //  console.log('Contact Added Successfully');
        this.message_success = 'Le rendez-vous a été ajouté avec succès';
        //        this.message_error = "";

      }
      , err => {
        //console.log(err);
        if (err.status == 0 || err.status == 500) { this.message_error = "Une erreur a été rencontré. veuillez réessayer plus tard "; }
        else if (err.status == 422) {
          //console.log(err.error.errors);

          this.message_error = err.error.errors;

        }
        //handle errors here
      }
    );
    this.resetForm();
  }


  private resetForm(): void {
    this.selectedDate = '';
  }
  extractDateAndTime(dateTimeString: string) {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return {
      date: `${year}-${month}-${day}`,
      time: `${hours}:${minutes}`
    };
  }


  addMinutes(dateTimeString: string, minutesToAdd: number) {
    const date = new Date(dateTimeString);
    date.setMinutes(date.getMinutes() + minutesToAdd);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  getCookie(name: string): string | null {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift() || null;
    }
    return null;
  }



}
