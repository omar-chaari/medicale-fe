import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-change-password-patient',
  templateUrl: './change-password-patient.component.html',
  styleUrls: ['./change-password-patient.component.css']
})
export class ChangePasswordPatientComponent {
  newPassword: string = "";
  confirmPassword: string = "";
  errorMessage: string = "";
  successMessage: string = "";
  id: number = 0;

  constructor(private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];

    });

  }

  onChangePassword(): void {
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas';
      return;
    }
    this.patientService.change_password_admin(this.id, this.newPassword)
      .subscribe(() => {
        this.newPassword = '';
        this.confirmPassword = '';
        this.errorMessage = '';
        this.successMessage = 'Le mot de passe a été changé avec succès!';

        // handle success
      }, error => {
        this.errorMessage = error.message;
        // handle error
      });
  }
}
