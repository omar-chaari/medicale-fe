import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  Url = 'https://127.0.0.1:8000/api/products';
  constructor(private httpClient:HttpClient) { }

  getAllProduits() {
    return this.httpClient.get(this.Url);
  }


}
