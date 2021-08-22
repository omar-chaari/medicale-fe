import { Component, OnInit } from '@angular/core';
import {  Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allAccounts:any;
  constructor(private restangular: Restangular) { }

  ngOnInit(): void {
  //  this.restangular.all('products').getList();
    let baseAccounts = this.restangular.all('products');
    
    // This will query /accounts and return a observable.
    baseAccounts.getList().subscribe(accounts => {
      this.allAccounts = accounts;
      console.log(accounts);
    });

  }

}
