import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendrierDisponibilitesComponent } from './calendrier-disponibilites/calendrier-disponibilites.component';
import { ListRdvComponent } from './list-rdv/list-rdv.component';

import { AuthPatientGuard } from './../guards/auth-patient.guard';

import { AnnulerRdvComponent } from './annuler-rdv/annuler-rdv.component';
import { AddDossierComponent } from './add-dossier/add-dossier.component';
import { EditDossierComponent } from './edit-dossier/edit-dossier.component';
import { ConsulterDossierComponent } from './consulter-dossier/consulter-dossier.component';
import { AfficherDocumentComponent } from './afficher-document/afficher-document.component';
const routes: Routes = [
  {
    path: 'calendrier-disponibilites/:id',
    component: CalendrierDisponibilitesComponent,
    canActivate: [AuthPatientGuard],

  },

  {
    path: 'list-rdv',
    component: ListRdvComponent,
    canActivate: [AuthPatientGuard],

  },
  {
    path: 'annuler-rdv/:id',
    component: AnnulerRdvComponent,
    canActivate: [AuthPatientGuard],
  },
  {
    path: 'add-dossier',
    component: AddDossierComponent,
    canActivate: [AuthPatientGuard],
  },
  {
    path: 'edit-dossier',
    component: EditDossierComponent,
    canActivate: [AuthPatientGuard],
  },
  {
    path: 'consulter-dossier',
    component: ConsulterDossierComponent,
    canActivate: [AuthPatientGuard],
  },
  {
    path: 'afficher-document/:id',
    component: AfficherDocumentComponent,
    canActivate: [AuthPatientGuard],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
