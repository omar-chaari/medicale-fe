import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-medecin',
  templateUrl: './show-medecin.component.html',
  styleUrls: ['./show-medecin.component.css']
})
export class ShowMedecinComponent implements OnInit {

  @Input() medecin: any;
  constructor(private router:Router) { }

  ngOnInit(): void {

    //this.averageScore = new Array(this.medecin.averageScore);

  }
  view(id:any) {
    //console.log(id);
    let id_array = id.split("/");
//console.log(id_array[2]);
    this.router.navigate([`detail/${id_array[3]}`]);
  }

}
