import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {


  user: any = {};
  signupForm: FormGroup;
  users: any;
  message_error: any;
  message_success: any;
  SpecialityList: any;
  GouvernoratList: any;
  isSubmitting: boolean = false;


  constructor(
    private fb: FormBuilder,
    private router: Router, private medecinService: MedecinService
  ) {


    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      speciality: ['', [Validators.required]],
      governorate: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      verification:['', Validators.required],


    })


  }


  ngOnInit(): void {

    this.fetchSpeciality();
    this.fetchGouvernorat();

  }

  register(form_value: FormGroup) {
    //console.log(form_value);
    this.isSubmitting = true;

    this.medecinService.register(form_value).subscribe(
      (data: any) =>  {
        console.log(data);  
        //  console.log('Contact Added Successfully');
        this.message_success = 'Le professionnel de santé a été ajouté avec succès';
        this.message_error = "";
        this.isSubmitting = false;


      }
      , err => {
      console.log(err);
        if (err.status == 0 || err.status == 500) { this.message_error = "Une erreur a été rencontré. veuillez réessayer plus tard "; }
        else if (err.status == 422) {
          //console.log(err.error.errors);

          this.message_error = err.error.errors;
          this.isSubmitting = false;

        }
        //handle errors here
      }


    )

  }
  fetchSpeciality(): void {

    this.medecinService.getAllSpeciality().subscribe(
      (data: any) =>  {

        console.log(data['data']);
        this.SpecialityList = data['data'];


      }
      , err => {
        console.log(err);
      }
    );

  }
  fetchGouvernorat(): void {

    this.medecinService.getAllGouvernorat().subscribe(
      (data: any) =>  {

        //console.log(data['data']);
        this.GouvernoratList = data['data'];


      }
      , err => {
      }
    );
  }
}

