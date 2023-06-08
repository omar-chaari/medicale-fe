import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-ajout-document',
  templateUrl: './ajout-document.component.html',
  styleUrls: ['./ajout-document.component.css']
})
export class AjoutDocumentComponent {

  user: any = {};
  addForm: FormGroup;
  users: any;
  message_error: any;
  message_success: any;
  @Input() consultation:number=0; // Receive the idPatient value from the parent component
 

  constructor(
    private fb: FormBuilder,
    private documentService: DocumentService,
    private router: Router,

  ) {


    this.addForm = this.fb.group({
      documentNames: ['', []],

    })


  }


  ngOnInit(): void {


  }

  register(form_value: any) {

    const table = "consultations";
    const cmd = "";
    const documentNames = form_value.documentNames.split(',');

    delete form_value.documentNames;

    this.uploadDocuments(documentNames, this.consultation);

    /*this.message_success = 'La consulation a été ajouté au dossier médical avec succès';
    this.message_error = "";
*/


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

            this.router.navigate([`/professionnel/edit-consultation/${this.consultation}`]);

          },
          err => {
            // Gérer les erreurs ici
          }
        );
      }
    }
  }

}
