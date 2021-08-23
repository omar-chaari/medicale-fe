import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: any;
  page = 1;
  count = 0;
  tableSize = 8;
  tableSizes = [8];
  productName:any;
  price:any;



  constructor(
    private produitService: ProduitService,
  

  ) { }

  ngOnInit(): void {
    this.fetchPosts();

  }
  fetchPosts(): void {
    console.log(this.productName);
    this.produitService.getAllProduits(this.page,this.price,this.productName).subscribe(
      data => {

        this.produits = data['hydra:member'];

        console.log(this.produits);
        this.count= data['hydra:totalItems'];
      }
    );

  }

  onTableDataChange(event:any){
    this.page = event;
    this.fetchPosts();
  }  

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }  
  submit(form) {

    this.price=form.value.price;
    this.productName=form.value.productName;
    this.fetchPosts();
    
    //console.log(form.value.price);
    //throw new Error(`D'OH!`);
}


}
