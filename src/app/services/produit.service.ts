import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  Url = 'https://127.0.0.1:8000/api';
  constructor(private httpClient:HttpClient) { }

  getAllProduits(page,price,productName,category) {
   
    var url=this.Url+"/products";
    if(productName==null )productName="";

    if(category==null )category="";
    
    url+="?page="+page+"&productName="+productName;
    
    url+="&category.name="+category;

    if(price!=null )url+="&price%5Bgte%5D="+price;
    return this.httpClient.get(url);
  }

  getAllCategory() {
    //+"&price%5Bgte%5D="+price
    //getAllCategory
    var url=this.Url+"/categories";
    return this.httpClient.get(url);
  }


}
