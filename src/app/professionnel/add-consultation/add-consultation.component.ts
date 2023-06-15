import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { DatatableService } from 'src/app/services/datatable.service';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';
import { ConsultationService } from 'src/app/services/consultation.service';


@Component({
  selector: 'app-add-consultation',
  templateUrl: './add-consultation.component.html',
  styleUrls: ['./add-consultation.component.css']
})
export class AddConsultationComponent {

  user: any = {};
  addForm: FormGroup;
  users: any;
  message_error: any;
  message_success: any;
  id_patient:number=0;
  pro:number=0;
  

  constructor(
    private fb: FormBuilder,
    private router: Router, private patientService: PatientService,
    private datatableService: DatatableService,
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private consultationService: ConsultationService,
  ) {

    this.route.params.subscribe(params => {
      this.id_patient = params['id_patient'];
      this.pro = params['id_pro'];

     // this.getPatient(this.id_patient);
    });

    this.addForm = this.fb.group({
      patient: ['', []],
      professional: ['', []],
      date: ['', Validators.required],
      motif: ['', [Validators.required]],
      notes: ['', [Validators.required]],
      documentNames : ['', []],

    })


    this.addForm.patchValue({
      date: this.getCurrentDate(),
      patient: this.id_patient,
      professional: this.pro,

      });
  }


  ngOnInit(): void {


  }

  register(form_value: any) {
    //console.log(form_value);
    /*

    create(record: any, table: string, cmd: string ="" 
    */
    const table = "consultations";
    const cmd="";
    const documentNames = form_value.documentNames.split(',');

    delete form_value.documentNames;
  
    this.consultationService.create(form_value).subscribe(
      (data: any) => {
        //console.log("consultation",data);
        //  console.log('Contact Added Successfully');
    // Appel du service DocumentService pour envoyer les fichiers
      this.uploadDocuments(documentNames, data.id);

        this.message_success = 'La consulation a été ajouté au dossier médical avec succès';
        this.message_error = "";

      }
      , err => {
        //console.log(err);
        if (err.status == 0 || err.status == 500) { this.message_error = "Une erreur a été rencontré. veuillez réessayer plus tard "; }
        else if (err.status == 422) {
          //console.log(err.error.errors);

          this.message_error = err.error.errors;

        }
        //handle errors here
      }


    )

  }
  getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}



uploadDocuments(documentNames: string[], consultationId: number) {
  const fileInputs = document.getElementById('documentNames') as HTMLInputElement;
  const files = fileInputs.files;
  
  if (files && files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const documentName = documentNames[i];
      this.documentService.uploadDocument(file, consultationId.toString(), documentName).subscribe(
        (data: any) => {
          // Traitement des réponses de l'API si nécessaire
        },
        err => {
          // Gérer les erreurs ici
        }
      );
    }
  }
}

}
