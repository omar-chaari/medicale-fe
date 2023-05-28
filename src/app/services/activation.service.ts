import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivationService {
  Url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  activateAccount(token: string): Observable<any> {
    return this.http.get(this.Url +`/patient/activation/${token}`)
    /*.pipe(
      catchError(error => {
        if (error.status === 404) {
          return ('Le lien d\'activation est invalide.');
        }

        if (error.status === 400) {
          return ('Le lien d\'activation est invalide.');
          ('Le lien d\'activation a expiré.');
        }

        if (error.status === 200) {
          const response = error.json();
          if (response.activated) {
            return   ('Votre compte est activé.');
          }
        }

        return ('Une erreur s\'est produite lors de l\'activation de votre compte.');
      })
    );*/
  }
}
