import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DatatableService } from 'src/app/services/datatable.service';

@Component({
  selector: 'app-edit-dossier',
  templateUrl: './edit-dossier.component.html',
  styleUrls: ['./edit-dossier.component.css']
})
export class EditDossierComponent {

  user: any = {};
  addForm: FormGroup;
  users: any;
  message_error: any;
  message_success: any;
  id_patient: number = 0;
  patient: any;
  pro: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private datatableService: DatatableService,

    private route: ActivatedRoute,
    private snackBar: MatSnackBar


  ) {

    this.patient = {
      first_name: '',
      last_name: '',
      address: '',
      phone: '',
      sexe: '',
      birthday: null,
      allergies: '',
      maladies_chroniques: '',
      notes_supplementaires: ''
    };


    const jsonString = this.getCookie("user_data");

    // Parse the JSON string back into an object

    if (jsonString !== null) {

      const data = JSON.parse(jsonString);

      this.id_patient = data.user_id;
      this.getPatient(this.id_patient);

    }


    this.addForm = this.fb.group({
      birthday: ['', Validators.required],
      sexe: ['', Validators.required],
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(8)]],

      allergies: ['', []],
      maladies_chroniques: ['', []],
      notes_supplementaires: ['', []]
    })


  }


  ngOnInit(): void {


  }


  onSubmit(form_value: any) {

    // Call the patient service to update the patient with the new values
    var cmd = "";

    this.datatableService.update(form_value, "patients", this.id_patient, cmd).subscribe(
      response => {

        //this.router.navigate(['/professionnel/list-patients']);

        this.router.navigate(['/patient/consulter-dossier']);

        this.snackBar.open('Dossier médical modifié avec succès', 'Fermer', {
          duration: 4000,
        });
      },
      error => {
        console.log("Failed to update patient", error);
      }
    );
  }

  getPatient(id: any): void {



    const table = "patients";

    this.datatableService.showRecord(id, table).subscribe(
      (data: any) => {
        this.patient = data;


        this.addForm.patchValue({
          first_name: this.patient.first_name,
          last_name: this.patient.last_name,
          address: this.patient.address,
          phone: this.patient.phone,
          sexe: this.patient.sexe,
          birthday: this.patient.birthday,
          allergies: this.patient.allergies,
          maladies_chroniques: this.patient.maladies_chroniques,
          notes_supplementaires: this.patient.notes_supplementaires
        });


      },
      err => {
        //   console.log(err);
      }
    );
  }


  getCookie(name: string): string | null {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift() || null;
    }
    return null;
  }

}
