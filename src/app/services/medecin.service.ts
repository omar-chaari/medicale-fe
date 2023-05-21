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


  getAllmedecins(tableID:string, where = '', limit = -1, page = 1, fields = "", order_by = "", search = "") {

    
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
  SearchMedecins(gouvernorat = '', speciality = '', name = '',limit=10, offset=0) {

    var url = this.Url + "/search-medecin?";
    url += "gouvernorat=" + gouvernorat;
    url += "&speciality=" + speciality;
    url += "&name=" + name;
    url += "&limit=" + limit;
    url += "&offset=" + offset;


    
    

    return this.httpClient.get(url);
  }

  SearchMedecinsAdmin(gouvernorat = '', speciality = '', name = '', verification ='',email:string ,limit=10, offset=0, sortColumn:string,
  sortOrder:string) {

    var url = this.Url + "/search-medecin?";
    url += "gouvernorat=" + gouvernorat;
    url += "&speciality=" + speciality;
    url += "&name=" + name;
    url += "&limit=" + limit;
    url += "&verification=" + verification;
    url += "&email=" + email;
    url += "&sortColumn=" + sortColumn;
    url += "&sortOrder=" + sortOrder;
    url += "&offset=" + offset;


    return this.httpClient.get(url);
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


  change_password_admin(id: number, password: string) {

    const url = this.Url + '/change-password-pro-admin';
    const body = {
      new_password: password,
      id: id,

    };

    return this.httpClient.post(url, body);

  }
}
