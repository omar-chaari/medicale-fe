import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivationService } from 'src/app/services/activation.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent {
  message: string = '';

  constructor(private route: ActivatedRoute, private activationService: ActivationService) {
    this.route.params.subscribe(params => {
      const token = params['token'];
      this.activationService.activateAccount(token).subscribe(
        data => {
          console.log(data);
          this.message = 'Votre compte a été activé avec succès.';
        },
        error => {
          //console.log(error);
          
          let msg_error="";
          if (error.status === 404) {
            msg_error=('Le lien d\'activation est invalide.');
          }
  
          if (error.status === 400) {
            msg_error=('Le lien d\'activation a expiré.');
          }
    
        
          this.message = msg_error;
        }
      );
    });
  }
}
