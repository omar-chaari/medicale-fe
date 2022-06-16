import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MedecinService {


  Url = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  register(medecin: any) {



    return this.httpClient.post(this.Url + "/register", medecin);
  }


  getAllmedecins(tableID, where = '', limit = -1, page = 1, fields = "", order_by = "", search = "") {

    
    var url = this.Url + "/search?";
    url += "tableID=" + tableID;
    url += "&where=" + where;
    url += "&limit=" + limit;
    url += "&page=" + page;
    url += "&fields=" + fields;
    url += "&order_by=" + order_by;
    url += "&search=" + search;

    return this.httpClient.get(url);
  }
  SearchMedecins(gouvernorat = '', speciality = '', name = '', page=1,) {

    var url = this.Url + "/search-medecin?";
    url += "gouvernorat=" + gouvernorat;
    url += "&speciality=" + speciality;
    url += "&name=" + name;
    url += "&page=" + page;


    return this.httpClient.get(url);
  }
  getAllSpeciality() {
    var url = this.Url + "/search?";
    url += "tableID=" + "speciality";


    return this.httpClient.get(url);

  }

  //Gouvernorat
  getAllGouvernorat() {
    var url = this.Url + "/search?";
    url += "tableID=" + "governorate";


    return this.httpClient.get(url);

  }
}
