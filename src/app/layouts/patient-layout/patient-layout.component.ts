import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-patient-layout',
  templateUrl: './patient-layout.component.html',
  styleUrls: ['./patient-layout.component.css']
})
export class PatientLayoutComponent {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }
  onLogout(): void {
    this.authService.logout();
    // Redirect the user to the login page or another relevant page.
  }
}
