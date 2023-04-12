import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';

@NgModule({
  declarations: [
    RendezVousComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,

  ]
})
export class PatientModule { }
