import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {

  Url = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }



  SearchAppointements(patient=0,date_jourd_huit="",limit=10, offset=0) {

    var url = this.Url + "/search-appointement?";
    url += "patient=" + patient;
    url += "&current_date=" + date_jourd_huit;
    url += "&limit=" + limit;
    url += "&offset=" + offset;


    
   // console.log(url);

    return this.httpClient.get(url);
  }


  
  SearchAppointementsPro(pro=0,date_debut="",date_fin="",limit=10, offset=0) {

    var url = this.Url + "/search-appointement-pro?";
    url += "pro=" + pro;
    url += "&date_debut=" + date_debut;
    url += "&date_fin=" + date_fin;
    url += "&limit=" + limit;
    url += "&offset=" + offset;
    
   
    return this.httpClient.get(url);
  }

  
    
  appointementCalendrier(pro=0,date_debut="",date_fin="",limit=10, offset=0) {

    var url = this.Url + "/appointement-calendrier?";
    url += "pro=" + pro;
    url += "&date_debut=" + date_debut;
    url += "&date_fin=" + date_fin;
    url += "&limit=" + limit;
    url += "&offset=" + offset;
    
   
    return this.httpClient.get(url);
  }
}
