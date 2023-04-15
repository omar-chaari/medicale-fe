import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListProfessionalsComponent } from './list-professionals/list-professionals.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { EditProComponent } from './edit-pro/edit-pro.component';
import { AddProfessionalComponent } from './add-professional/add-professional.component';
import { DeleteProComponent } from './delete-pro/delete-pro.component';
import {MatSortModule} from '@angular/material/sort';
import { OrderByPipe } from './order-by.pipe';
import { DatePipe } from '@angular/common';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';

@NgModule({
  declarations: [ListProfessionalsComponent, EditProComponent,  AddProfessionalComponent, DeleteProComponent,  OrderByPipe, AddPatientComponent, EditPatientComponent, DeletePatientComponent, ListPatientsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
  ],
  providers: [DatePipe],

})
export class AdminModule { }
