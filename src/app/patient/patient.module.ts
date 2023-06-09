import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { CalendrierDisponibilitesComponent } from './calendrier-disponibilites/calendrier-disponibilites.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ListRdvComponent } from './list-rdv/list-rdv.component';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { DatePipe } from '@angular/common';
import { AnnulerRdvComponent } from './annuler-rdv/annuler-rdv.component';
import { AddDossierComponent } from './add-dossier/add-dossier.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditDossierComponent } from './edit-dossier/edit-dossier.component';
import { ConsulterDossierComponent } from './consulter-dossier/consulter-dossier.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    CalendrierDisponibilitesComponent,
    ListRdvComponent,
    AnnulerRdvComponent,
    AddDossierComponent,
    EditDossierComponent,
    ConsulterDossierComponent,
    
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FullCalendarModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [DatePipe],

  schemas: [CUSTOM_ELEMENTS_SCHEMA] 

})
export class PatientModule { }
