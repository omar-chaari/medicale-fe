import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedecinService } from './../../services/medecin.service';

@Component({
  selector: 'app-register-medecin',
  templateUrl: './register-medecin.component.html',
  styleUrls: ['./register-medecin.component.css']
})

//
export class RegisterMedecinComponent implements OnInit {

  user: any = {};
  signupForm: FormGroup;
  users: any;
  message_error: any;
  message_success: any;
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


    })


  }


  ngOnInit(): void {
  }

  register(form_value) {
    console.log(form_value);
    this.medecinService.register(form_value).subscribe(
      data => {
        //console.log(data);  
      //  console.log('Contact Added Successfully');
      this.message_success = 'Votre demande a été envoyé avec succés, un administrateur va la traiter dans les plus bref delais';
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
