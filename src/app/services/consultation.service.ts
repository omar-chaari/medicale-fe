import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  create(record: any) {
    const formData = new FormData();
    formData.append('professional', record.professional);
    formData.append('patient', record.patient);
    formData.append('date', record.date);
    formData.append('motif', record.motif);
    formData.append('notes', record.notes);

    console.log(formData);

    const body = {
      professional: record.professional,
      patient: record.patient,
      date: record.date,
      motif: record.motif,
      notes: record.notes,
    };




    return this.http.post(`${this.apiUrl}/consultation-store`, body);
  }

  SearchConsultations(patient = 0, limit = 4, offset = 0) {

    var url = this.apiUrl + "/search-consulatation?";
    url += "patient=" + patient;
    url += "&limit=" + limit;
    url += "&offset=" + offset;


    return this.http.get(url);
  }


  getImageUrl(filename: string): string {
    // Assuming your API endpoint expects the filename as a path parameter
    return `${this.apiUrl}/images/${filename}`;
  }


}



