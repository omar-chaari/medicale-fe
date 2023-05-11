import { Component } from '@angular/core';
import { AuthProfessionnelService } from 'src/app/services/auth-professionnel.service';
@Component({
  selector: 'app-professionnel-layout',
  templateUrl: './professionnel-layout.component.html',
  styleUrls: ['./professionnel-layout.component.css']
})
export class ProfessionnelLayoutComponent {

  constructor(private authProfessionnelService: AuthProfessionnelService) {}
  user_name: string = '';

  ngOnInit(): void {
    const jsonString = this.getCookie("pro_data");

    // Parse the JSON string back into an object
    if (jsonString !== null) {

      const data = JSON.parse(jsonString);

      this.user_name = data.first_name + " "+ data.last_name;
    }

  }
  onLogout(): void {
    this.authProfessionnelService.logout();
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
