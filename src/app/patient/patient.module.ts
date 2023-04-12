import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { CalendrierDisponibilitesComponent } from './calendrier-disponibilites/calendrier-disponibilites.component';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    RendezVousComponent,
    CalendrierDisponibilitesComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FullCalendarModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 

})
export class PatientModule { }
