import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPatientsComponent } from "./list-patients/list-patients.component";

import { CalendrierDisponibilitesComponent } from './calendrier-disponibilites/calendrier-disponibilites.component';

import { AuthProfessionnelGuard } from '../guards/auth-professionnel.guard';
//import
const routes: Routes = [
 
  
  {
    path: 'list-patients',
    component: ListPatientsComponent,
    canActivate: [AuthProfessionnelGuard] ,
    
  },
  {
    path: 'calendrier-disponibilites',
    component: CalendrierDisponibilitesComponent,
    canActivate: [AuthProfessionnelGuard] ,
    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionnelRoutingModule { }
