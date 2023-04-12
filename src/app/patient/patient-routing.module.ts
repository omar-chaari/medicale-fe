import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CalendrierDisponibilitesComponent} from './calendrier-disponibilites/calendrier-disponibilites.component';


const routes: Routes = [
  {
    path: 'calendrier-disponibilites',
    component: CalendrierDisponibilitesComponent,
    children: [
      {
        path: 'calendrier-disponibilites',
        component: CalendrierDisponibilitesComponent,

      }
    ]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
