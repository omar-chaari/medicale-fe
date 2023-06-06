import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  uploadDocument(file: File, consultation: string, description: string) {
    const formData = new FormData();
    formData.append('fichier', file);
    formData.append('consultation', consultation);
    formData.append('description', description);

    console.log("***INSERT DOC***");
    console.log(consultation);

    return this.http.post(`${this.apiUrl}/document-store`, formData);
  }
}
