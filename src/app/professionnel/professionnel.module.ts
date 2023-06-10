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
import { AnnulerRdvComponent } from './annuler-rdv/annuler-rdv.component';
import { EditRdvComponent } from './edit-rdv/edit-rdv.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddDossierComponent } from './add-dossier/add-dossier.component';
import { ListDossiersComponent } from './list-dossiers/list-dossiers.component';
import { EditDossierComponent } from './edit-dossier/edit-dossier.component';
import { AddConsultationComponent } from './add-consultation/add-consultation.component';
import { ListConsultationsComponent } from './list-consultations/list-consultations.component';
import { EditConsultationComponent } from './edit-consultation/edit-consultation.component';
import { ListDocumentsComponent } from './list-documents/list-documents.component';
import { AjoutDocumentComponent } from './ajout-document/ajout-document.component';
import { DeleteConsultationComponent } from './delete-consultation/delete-consultation.component';
import { ConsulterDossierComponent } from './consulter-dossier/consulter-dossier.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';


@NgModule({
  declarations: [
    ListPatientsComponent,
    OrderByPipe,
    CalendrierDisponibilitesComponent,
    ListRdvComponent,
    RdvPatientComponent,
    AnnulerRdvComponent,
    EditRdvComponent,
    AddPatientComponent,
    AddDossierComponent,
    ListDossiersComponent,
    EditDossierComponent,
    AddConsultationComponent,
    ListConsultationsComponent,
    EditConsultationComponent,
    ListDocumentsComponent,
    AjoutDocumentComponent,
    DeleteConsultationComponent,
    ConsulterDossierComponent,
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
    FullCalendarModule,
    MatSnackBarModule,
    NgxImageZoomModule
  ],
  providers: [DatePipe],

})
export class ProfessionnelModule { }
