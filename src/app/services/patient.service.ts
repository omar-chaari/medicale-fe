import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  Url = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  register(patient: any) {




    return this.httpClient.post(this.Url + "/register-patient", patient);
  }



  change_password_admin(id: number, password: string) {

    const url = this.Url + '/change-password-patient-admin';
    const body = {
      new_password: password,
      id: id,

    };

    return this.httpClient.post(url, body);

  }
}
