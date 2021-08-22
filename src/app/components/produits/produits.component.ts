import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';

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



  constructor(
    private produitService: ProduitService,
  

  ) { }

  ngOnInit(): void {
    this.fetchPosts();

  }
  fetchPosts(): void {
    this.produitService.getAllProduits(this.page).subscribe(
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


}
