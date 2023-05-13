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
import { CalendrierDisponibilitesComponent } from './calendrier-disponibilites/calendrier-disponibilites.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ListRdvComponent } from './list-rdv/list-rdv.component';
import { RdvPatientComponent } from './rdv-patient/rdv-patient.component';


@NgModule({
  declarations: [
    ListPatientsComponent,
    OrderByPipe,
    CalendrierDisponibilitesComponent,
    ListRdvComponent,
    RdvPatientComponent
  ],
  imports: [
    CommonModule,
    ProfessionnelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    FullCalendarModule
  ],
  providers: [DatePipe],

})
export class ProfessionnelModule { }
