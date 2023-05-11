import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionnelRoutingModule } from './professionnel-routing.module';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { DatePipe } from '@angular/common';
import { OrderByPipe } from './order-by.pipe';


@NgModule({
  declarations: [
    ListPatientsComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    ProfessionnelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [DatePipe],

})
export class ProfessionnelModule { }
