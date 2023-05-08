import { Component } from '@angular/core';
import { AuthPatientService } from 'src/app/services/auth-patient.service';

@Component({
  selector: 'app-patient-layout',
  templateUrl: './patient-layout.component.html',
  styleUrls: ['./patient-layout.component.css']
})
export class PatientLayoutComponent {

  constructor(private authPatientService: AuthPatientService) {}

  ngOnInit(): void {
  }
  onLogout(): void {
    this.authPatientService.logout();
    // Redirect the user to the login page or another relevant page.
  }
}
