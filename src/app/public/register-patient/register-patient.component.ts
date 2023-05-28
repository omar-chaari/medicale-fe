import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent {

  user: any = {};
  signupForm: FormGroup;
  users: any;
  message_error: any;
  message_success: any;
  SpecialityList: any;
  GouvernoratList: any;

  constructor(
    private fb: FormBuilder,
    private router: Router, private patientService: PatientService
  ) {


    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(8)]],


    })


  }


  ngOnInit(): void {


  }

  register(form_value: any ) {
    console.log(form_value);
    this.patientService.register(form_value).subscribe(
      (data: any  )=> {
        console.log(data);  
        //  console.log('Contact Added Successfully');
        this.message_success = 'Félicitations! Votre inscription a été effectuée avec succès. Nous avons envoyé un email contenant un lien pour activer votre compte.';
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


}
