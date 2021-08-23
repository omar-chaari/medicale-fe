import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  Url = 'https://127.0.0.1:8000/api/products';
  constructor(private httpClient:HttpClient) { }

  getAllProduits(page,price,productName) {
    //+"&price%5Bgte%5D="+price
    var url=this.Url;
    if(productName==null )productName="";

    url+="?page="+page+"&productName="+productName;
    
    if(price!=null )url+="&price%5Bgte%5D="+price;
    //console.log(this.Url);
    console.log("url:",url);
    return this.httpClient.get(url);
  }


}
