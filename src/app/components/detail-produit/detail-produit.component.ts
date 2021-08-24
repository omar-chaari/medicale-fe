import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
 produit:any;
 category:any;
 reviews:any;
  constructor(    private produitService: ProduitService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.produitService.getProduit(id).subscribe(
      data => {
        this.produit = data;
        this.category=this.produit.name;
       
       
        this.reviews=this.produit.products[0].reviews;
     this.produit=this.produit.products[0];

  }
    );
  }
  createRange(number){
   
    return new Array(number);
  }
  

}
