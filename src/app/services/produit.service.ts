import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  Url = environment.apiUrl;
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
    var url=this.Url+"/categories";
    return this.httpClient.get(url);
  }
  getProduit(id){
    var url=this.Url+"/products/"+id+"/category";
    return this.httpClient.get(url);
  }

}
