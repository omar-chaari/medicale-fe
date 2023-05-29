import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { RegisterProComponent } from "./register-pro/register-pro.component";
import { RegisterProfessionalComponent } from './register-professional/register-professional.component';
import { SearchProComponent } from './search-pro/search-pro.component';
import { ListProComponent } from './list-pro/list-pro.component';
import { LoginComponent } from './login/login.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { LoginPatientPageComponent } from './login-patient-page/login-patient-page.component';
import { LoginProfessionnelComponent } from './login-professionnel/login-professionnel.component';
import { ActivationComponent } from './activation/activation.component';
const routes: Routes = [
  {
    path: 'register-professional',
    component: RegisterProfessionalComponent,

  },
  {
    path: '',
    component: SearchProComponent,
  },
  {
    path: 'list-pro/:name?/:spec?/:gov?',
    component: ListProComponent,
  }

  ,
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'register-patient',
    component: RegisterPatientComponent,
  },
  {
    path: 'login-patient',
    component: LoginPatientPageComponent,
  }
  ,
  {
    path: 'activation/:token',
    component: ActivationComponent,

  },

    {
    path: 'login-professionnel',
    component: LoginProfessionnelComponent,

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
