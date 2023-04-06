import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message_error: string = '';
  constructor(private authService: AuthService, private router: Router
  ) { }
  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.authService.loginAdmin(this.username, this.password).subscribe(
      (response) => {
        this.authService.setAuthenticated(true);
        this.router.navigate(['/admin/list-pro']);
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

}
