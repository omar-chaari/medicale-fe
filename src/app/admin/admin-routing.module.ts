import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProfessionalsComponent } from "./list-professionals/list-professionals.component";
import { EditProComponent } from './edit-pro/edit-pro.component';
import { AddProfessionalComponent } from './add-professional/add-professional.component';
import { DeleteProComponent } from './delete-pro/delete-pro.component';
import { AuthGuard } from './../guards/auth.guard';




const routes: Routes = [
  {
    path: '',
    component: ListProfessionalsComponent,
    canActivate: [AuthGuard] ,
    children: [
      {
        path: 'list-pro',
        component: ListProfessionalsComponent,
        canActivate: [AuthGuard] 
      }
    ]
  },
  {
    path: 'edit-pro/:id',
    component: EditProComponent,
    children: [
      {
        path: 'edit-pro/:id',
        component: EditProComponent,

      }
    ]
  },
  {
    path: 'delete-pro/:id',
    component: DeleteProComponent,
    children: [
      {
        path: 'delete-pro/:id',
        component: DeleteProComponent,

      }
    ]
  },
  {
    path: 'add-professional',
    component: AddProfessionalComponent,
    children: [
      {
        path: 'add-professional',
        component: AddProfessionalComponent,

      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
