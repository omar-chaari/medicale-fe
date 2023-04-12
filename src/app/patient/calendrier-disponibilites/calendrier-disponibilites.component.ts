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

    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ],
    locale: frLocale

  };
  disponibilites = [
    // Remplacez ces données par celles de votre médecin
    { title: 'Disponible', start: '2023-04-12T10:00:00', end: '2023-04-12T12:00:00', backgroundColor: 'green', textColor: 'white' },
    { title: 'Disponible', start: '2023-04-13T14:00:00', end: '2023-04-13T16:00:00', backgroundColor: 'green', textColor: 'white' },
    { title: 'Disponible', start: '2023-04-14T09:00:00', end: '2023-04-14T11:00:00', backgroundColor: 'green', textColor: 'white' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  
  handleDateClick(event: any): void {
    console.log('Date sélectionnée:', event.dateStr);
    // Vous pouvez ajouter ici la logique pour ouvrir un formulaire de prise de rendez-vous avec la date sélectionnée.
  }

}
