import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendrierDisponibilitesComponent} from './calendrier-disponibilites/calendrier-disponibilites.component';
import { ListRdvComponent } from './list-rdv/list-rdv.component';

import { AuthPatientGuard } from './../guards/auth-patient.guard';

import  {AnnulerRdvComponent} from './annuler-rdv/annuler-rdv.component';
import { AddDossierComponent } from './add-dossier/add-dossier.component';
import { EditDossierComponent } from './edit-dossier/edit-dossier.component';

const routes: Routes = [
  {
    path: 'calendrier-disponibilites/:id',
    component: CalendrierDisponibilitesComponent,
    canActivate: [AuthPatientGuard] ,

  },

  {
    path: 'list-rdv',
    component: ListRdvComponent,
    canActivate: [AuthPatientGuard] ,

  },
  {
    path: 'annuler-rdv/:id',
    component: AnnulerRdvComponent,
    canActivate: [AuthPatientGuard] ,
   },
   {
    path: 'add-dossier',
    component: AddDossierComponent,
    canActivate: [AuthPatientGuard] ,
   },
   {
    path: 'edit-dossier',
    component: EditDossierComponent,
    canActivate: [AuthPatientGuard] ,
   },
   
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
