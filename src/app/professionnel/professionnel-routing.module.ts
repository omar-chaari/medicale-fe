import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPatientsComponent } from "./list-patients/list-patients.component";

import { CalendrierDisponibilitesComponent } from './calendrier-disponibilites/calendrier-disponibilites.component';

import { AuthProfessionnelGuard } from '../guards/auth-professionnel.guard';
import { ListRdvComponent } from './list-rdv/list-rdv.component';
import { RdvPatientComponent } from './rdv-patient/rdv-patient.component';

import { AnnulerRdvComponent } from './annuler-rdv/annuler-rdv.component';
//import
import { EditRdvComponent } from './edit-rdv/edit-rdv.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddDossierComponent } from './add-dossier/add-dossier.component';

const routes: Routes = [


  {
    path: 'list-patients',
    component: ListPatientsComponent,
    canActivate: [AuthProfessionnelGuard],

  },
  {
    path: 'calendrier-disponibilites',
    component: CalendrierDisponibilitesComponent,
    canActivate: [AuthProfessionnelGuard],

  },
  {
    path: 'list-rdv',
    component: ListRdvComponent,
    canActivate: [AuthProfessionnelGuard],

  },
  {
    path: 'rdv-patient/:id',
    component: RdvPatientComponent,
    canActivate: [AuthProfessionnelGuard],

  },
  {
    path: 'annuler-rdv/:id',
    component: AnnulerRdvComponent,
    canActivate: [AuthProfessionnelGuard],
  },
  {
    path: 'edit-rdv/:id',
    component: EditRdvComponent,
    canActivate: [AuthProfessionnelGuard],
  },

  {
    path: 'add-patient',
    component: AddPatientComponent,
    canActivate: [AuthProfessionnelGuard],

  },
  {
    path: 'add-dossier/:id',
    component: AddDossierComponent,
    canActivate: [AuthProfessionnelGuard],

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionnelRoutingModule { }
