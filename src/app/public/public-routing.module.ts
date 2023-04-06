import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { RegisterProComponent } from "./register-pro/register-pro.component";
import { RegisterProfessionalComponent } from './register-professional/register-professional.component';
import { SearchProComponent } from './search-pro/search-pro.component';
import { ListProComponent } from './list-pro/list-pro.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: 'register-professional',
    component: RegisterProfessionalComponent,
    children: [
      {
        path: 'register-professional',
        component: RegisterProfessionalComponent,

      }
    ]
  },
  {
    path: '',
    component: SearchProComponent,
    /*children: [
      {
        path: 'search-pro',
        component: SearchProComponent,

      }
    ]*/
  },
  {
    path: 'list-pro/:name?/:spec?/:gov?',
    component: ListProComponent,
    children: [
      {
        path: 'list-pro/:name?/:spec?/:gov?',
        component: ListProComponent,

      }
    ]
  }

  ,
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,

      }
    ]
  }


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
