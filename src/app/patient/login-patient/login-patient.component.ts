import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPatientService } from 'src/app/services/auth-patient.service';


@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent {

  username: string = '';
  password: string = '';
  message_error: string = '';
  constructor(private authPatientService: AuthPatientService, private router: Router
  ) {


  }
  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.authPatientService.loginAdmin(this.username, this.password).subscribe(
      (response) => {
        //this.authPatientService.setAuthenticated(true);
        // After a successful login/registration, store the API key as an HttpOnly cookie
        //localStorage.setItem('isLoggedIn', 'true');

        let apiKey = response["token"];

        // Save the string in a cookie
        this.setCookie('user_data_'+this.username, apiKey, 20);


        this.router.navigate(['/patient/list-rdv']);
      },
      (error) => {
        if (error.status === 401) {
          // Handle 401 Unauthorized error without logging to the console.
          this.message_error = 'Email ou mot de passe invalide. Veuillez réessayer';
        } else {
          //console.error('Error during login:', error);
          // Handle other errors here.

          if (error.status === 0 || error.status === 500) {
            this.message_error = 'Une erreur a été rencontré. veuillez réessayer plus tard';
          } else if (error.status === 422) {
            // Handle 422 Unprocessable Entity errors here.
          }
        }
      }
    );
  }

  setCookie(name:string, value:string, minutes:number) {
    let expires = "";
    if (minutes) {
      const date = new Date();
      date.setTime(date.getTime() + (minutes * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }


}
