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
import { Router } from '@angular/router';

registerLocaleData(localeFr);

@Component({
  selector: 'app-calendrier-disponibilites',
  templateUrl: './calendrier-disponibilites.component.html',
  styleUrls: ['./calendrier-disponibilites.component.css']
})
export class CalendrierDisponibilitesComponent implements OnInit {
  @ViewChild(FullCalendarComponent, { static: false }) calendarComponent!: FullCalendarComponent;

  showForm = false;
  showErrorModal = false;
  selectedDate: string = "";
  selectedTime: string = "";
  message_success: string = "";
  errorMessage: string = "";
  professional: number = 0;
  appointements: any = [];
  medecin: any = [];

  calendarOptions: CalendarOptions = {};
  events: any = [];
  isSubmitting = false;
  motif: string = "";


  constructor(

    private datatableService: DatatableService,
    private route: ActivatedRoute,
    private router: Router



  ) {

      const jsonString = this.getCookie("pro_data");

      if (jsonString !== null) {

        const data = JSON.parse(jsonString);
  
        this.professional = data.user_id;
      }
  
  

      this.getMedecin(this.professional);

    

    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
      initialView: 'timeGridWeek',
      dateClick: this.handleDateClick.bind(this),
      events: this.events,
      locale: frLocale,
      slotMinTime: '08:00',
      slotMaxTime: '18:00',
      allDaySlot: false,
      height: 'auto',
      businessHours: {
        startTime: '08:00',
        endTime: '18:00',
        daysOfWeek: [1, 2, 3, 4, 5, 6], // Lundi à vendredi
      },
    };



  }

  ngOnInit(): void {
    //this.checkCookieExpiration();

  }
  ngAfterViewInit(): void {
    this.fetchAppointements();
  }



  handleDateClick(event: any): void {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Remove the time part of the current date
    const selectedDate = new Date(event.dateStr);
    selectedDate.setHours(0, 0, 0, 0); // Remove the time part of the selected date


    if (selectedDate >= currentDate) {
      this.errorMessage = "";
      this.selectedDate = event.dateStr;
      const { date, time } = this.extractDateAndTime(this.selectedDate);

      this.selectedDate = date;
      this.selectedTime = time;

      this.showForm = true;
    } else {
      this.errorMessage = `Veuillez sélectionner une date valide à partir de ${currentDate.toLocaleDateString()}`;

      this.showErrorModal = true;
    }


  }
  onFormCancel(): void {
    this.showForm = false;
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

  fetchAppointements(): void {


    var where: string = " 1=1 ";
    var table;






    // Get the current date and time
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    const date_jourd_huit = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    // Add the condition to the where variable
    where += ` AND professional='${this.professional}' AND date_debut >= '${date_jourd_huit}'`;


    table = "appointements";

    let fields = "date_debut,date_fin";

    this.datatableService.list(fields, table, where, -1, 0, "", "").subscribe(
      (data: any) => {
        this.appointements = data['data'];

        console.log(this.appointements);
        const event_array = this.formatAppointmentsToEvents(this.appointements);
        this.calendarOptions.events = event_array;

        //this.events=event_array;

        // Update the events in the FullCalendarComponent
        this.calendarComponent.getApi().removeAllEvents();
        this.calendarComponent.getApi().addEventSource(event_array);


      },
      err => {
        console.log(err);
      }
    );
  }

  formatAppointmentsToEvents(appointments: any[]): any[] {
    return appointments.map((appointment) => {
      return {
        start: appointment.date_debut.replace(' ', 'T'),
        end: appointment.date_fin.replace(' ', 'T'),
        color: 'Moccasin',
        rendering: 'background',
      };
    });
  }

  checkCookieExpiration(): void {
    // Get the cookie value
    const cookieValue = this.getCookie('user_data');

    if (cookieValue) {
      try {
        // Parse the JSON string back into an object
        const data = JSON.parse(cookieValue);

        // Get the expiration time from the cookie data
        const expirationTime = new Date(data.expiration);

        // Check if the cookie has expired
        if (expirationTime < new Date()) {
          // Clear the expired cookie
          this.clearCookie('user_data');

          // Navigate the user to the login page
          this.router.navigate(['/public/login-patient']);
        } else {
          // Add 20 minutes to the expiration time
          const expirationDate = new Date();
          expirationDate.setMinutes(expirationDate.getMinutes() + 20);

          document.cookie = `user_data=${JSON.stringify(data)}; expires=${expirationDate.toUTCString()}; path=/;`;

        }
      } catch (error) {
        console.error('Error parsing the expiration time:', error);
        // Clear the invalid cookie
        this.clearCookie('user_data');
        // Navigate the user to the login page
        this.router.navigate(['/public/login-patient']);
      }
    } else {
      // If there's no cookie, navigate the user to the login page
      this.router.navigate(['/public/login-patient']);

    }
  }

  clearCookie(name: string): void {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  closeErrorModal(): void {
    this.showErrorModal = false;
  }

  getMedecin(id: any): void {



    const table = "users";

    this.datatableService.showRecord(id, table).subscribe(
      (data: any) => {
        this.medecin = data;

        //     console.log(this.medecin);
      },
      err => {
        //   console.log(err);
      }
    );
  }

}
