import { Component } from '@angular/core';
import { AuthPatientService } from 'src/app/services/auth-patient.service';

@Component({
  selector: 'app-patient-layout',
  templateUrl: './patient-layout.component.html',
  styleUrls: ['./patient-layout.component.css']
})
export class PatientLayoutComponent {

  constructor(private authPatientService: AuthPatientService) {}
  user_name: string = '';

  ngOnInit(): void {
    const jsonString = this.getCookie("user_data");

    // Parse the JSON string back into an object
    if (jsonString !== null) {

      const data = JSON.parse(jsonString);

      this.user_name = data.first_name + " "+ data.last_name;
    }

  }
  onLogout(): void {
    this.authPatientService.logout();
    // Redirect the user to the login page or another relevant page.
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
