import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CalendrierDisponibilitesComponent} from './calendrier-disponibilites/calendrier-disponibilites.component';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { ListRdvComponent } from './list-rdv/list-rdv.component';

const routes: Routes = [
  {
    path: 'calendrier-disponibilites',
    component: CalendrierDisponibilitesComponent,
   
  },
  {
    path: 'login-patient',
    component: LoginPatientComponent,
   
  },
  {
    path: 'list-rdv',
    component: ListRdvComponent,
   
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
