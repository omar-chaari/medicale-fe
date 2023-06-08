import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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
 
  documentDelete(documentId: number): Observable<any> {
    const endpoint = `${this.apiUrl}/document-delete`;
   // return this.http.delete(endpoint, { params: { documentId } });


    const body = {
      id: documentId,
    
    };
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: body
    };

   
    return this.http.delete(endpoint, httpOptions);

  }

  

}
