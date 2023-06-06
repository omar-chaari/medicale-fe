import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


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

    console.log("***CREATE***");


    console.log(body);

    return this.http.post(`${this.apiUrl}/consultation-store`, body);
  }
}
