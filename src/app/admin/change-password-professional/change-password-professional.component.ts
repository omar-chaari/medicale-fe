import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-change-password-professional',
  templateUrl: './change-password-professional.component.html',
  styleUrls: ['./change-password-professional.component.css']
})
export class ChangePasswordProfessionalComponent {
  newPassword: string="";
  confirmPassword: string="";
  errorMessage: string="";
  successMessage: string="";
  id: number=0;

  constructor(private medecinService: MedecinService,
    private route: ActivatedRoute,
    private router: Router,
) {}

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
    this.medecinService.change_password_admin(this.id,this.newPassword)
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
