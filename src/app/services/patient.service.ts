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


    console.log(patient);


    return this.httpClient.post(this.Url + "/register-patient", patient);
  }



  getAllSpeciality() {
    var url = this.Url + "/search?";
    url += "tableID=" + "specialities";

    return this.httpClient.get(url);

  }

  //Gouvernorat
  getAllGouvernorat() {
    var url = this.Url + "/search?";
    url += "tableID=" + "governorates";


    return this.httpClient.get(url);

  }
}
