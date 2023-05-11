import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProfessionnelService } from 'src/app/services/auth-professionnel.service';
@Component({
  selector: 'app-login-professionnel',
  templateUrl: './login-professionnel.component.html',
  styleUrls: ['./login-professionnel.component.css']
})
export class LoginProfessionnelComponent {

  username: string = '';
  password: string = '';
  message_error: string = '';
  constructor(private authProfessionnelService: AuthProfessionnelService, private router: Router
  ) {


  }
  onSubmit() {

    this.authProfessionnelService.loginAdmin(this.username, this.password).subscribe(
      (response) => {
        //this.authProfessionnelService.setAuthenticated(true);
        // After a successful login/registration, store the API key as an HttpOnly cookie
        //localStorage.setItem('isLoggedIn', 'true');

        let apiKey = response["token"];

        localStorage.setItem('api_key', apiKey);


        const dataUser = {
          apiKey: response["token"],
          user_id: response["user_id"],
          first_name: response["first_name"],
          last_name: response["last_name"],
        };
        
        const jsonUser = JSON.stringify(dataUser);
        
        // Save the string in a cookie
        this.setCookie('pro_data', jsonUser, 20);


        this.router.navigate(['/professionnel/list-patients']);
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