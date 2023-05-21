import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProfessionalsComponent } from "./list-professionals/list-professionals.component";
import { EditProComponent } from './edit-pro/edit-pro.component';
import { AddProfessionalComponent } from './add-professional/add-professional.component';
import { DeleteProComponent } from './delete-pro/delete-pro.component';
import { AuthGuard } from './../guards/auth.guard';

import { ListPatientsComponent } from "./list-patients/list-patients.component";
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { ChangePasswordProfessionalComponent } from './change-password-professional/change-password-professional.component';
import { ChangePasswordPatientComponent } from './change-password-patient/change-password-patient.component';
const routes: Routes = [
  {
    path: '',
    component: ListProfessionalsComponent,
    canActivate: [AuthGuard] ,
    
  },
  {
    path: 'list-pro',
    component: ListProfessionalsComponent,
    canActivate: [AuthGuard] ,
    
  },
  
  {
    path: 'list-patients',
    component: ListPatientsComponent,
    canActivate: [AuthGuard] ,
    
  },
  {
    path: 'edit-pro/:id',
    component: EditProComponent,
   
  },
  {
    path: 'delete-pro/:id',
    component: DeleteProComponent,
   },
  {
    path: 'add-professional',
    component: AddProfessionalComponent,
   
  },
  {
    path: 'edit-patient/:id',
    component: EditPatientComponent,
   
  },
  {
    path: 'delete-patient/:id',
    component: DeletePatientComponent,
   },
  {
    path: 'add-patient',
    component: AddPatientComponent,
   
  },
  {
    path: 'change-password/:id',
    component: ChangePasswordProfessionalComponent,
  
  },
  {
    path: 'change-password-patient/:id',
    component: ChangePasswordPatientComponent,
  
  }

  
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
