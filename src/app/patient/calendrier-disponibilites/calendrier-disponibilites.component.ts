import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import frLocale from '@fullcalendar/core/locales/fr';

registerLocaleData(localeFr);

@Component({
  selector: 'app-calendrier-disponibilites',
  templateUrl: './calendrier-disponibilites.component.html',
  styleUrls: ['./calendrier-disponibilites.component.css']
})
export class CalendrierDisponibilitesComponent implements OnInit {
  
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
  
 

  constructor() { }

  ngOnInit(): void {
  }

  
  handleDateClick(event: any): void {
    console.log('Date sélectionnée:', event.dateStr);
    // Vous pouvez ajouter ici la logique pour ouvrir un formulaire de prise de rendez-vous avec la date sélectionnée.
  }

}
