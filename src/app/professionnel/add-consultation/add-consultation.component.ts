import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { DatatableService } from 'src/app/services/datatable.service';
import { ActivatedRoute } from '@angular/router';


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
    console.log(form_value);
    /*

    create(record: any, table: string, cmd: string ="" 
    */
    const table = "consultations";
    const cmd="";
    this.datatableService.create(form_value, table, cmd).subscribe(
      (data: any) => {
        console.log(data);
        //  console.log('Contact Added Successfully');
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



}
