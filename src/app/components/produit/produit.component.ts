import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() produit: any;
  averageScore:any;
  constructor() { }

  ngOnInit(): void {

    this.averageScore = new Array(this.produit.averageScore);

  }

}
