import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() produit: any;
  averageScore:any;
  constructor(private router:Router) { }

  ngOnInit(): void {

    this.averageScore = new Array(this.produit.averageScore);

  }
  view(id:any) {
    console.log(id);
    let id_array = id.split("/");
console.log(id_array[2]);
    this.router.navigate([`detail/${id_array[3]}`]);
  }

}
