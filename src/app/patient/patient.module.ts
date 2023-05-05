import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { CalendrierDisponibilitesComponent } from './calendrier-disponibilites/calendrier-disponibilites.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { ListRdvComponent } from './list-rdv/list-rdv.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RendezVousComponent,
    CalendrierDisponibilitesComponent,
    LoginPatientComponent,
    ListRdvComponent,
    
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FullCalendarModule,
    FormsModule,


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 

})
export class PatientModule { }
