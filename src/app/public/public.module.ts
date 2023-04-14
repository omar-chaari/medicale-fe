import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { RegisterProfessionalComponent } from './register-professional/register-professional.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchProComponent } from './search-pro/search-pro.component';
import { ShowProComponent } from './show-pro/show-pro.component';
import { ListProComponent } from './list-pro/list-pro.component';
import { HeaderComponent } from './header/header.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
@NgModule({
  declarations: [RegisterProfessionalComponent,  SearchProComponent, ShowProComponent,
    ListProComponent, HeaderComponent, LoginComponent, RegisterPatientComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule
  ]
})
export class PublicModule { }
