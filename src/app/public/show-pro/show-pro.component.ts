import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-show-pro',
  templateUrl: './show-pro.component.html',
  styleUrls: ['./show-pro.component.css']
})
export class ShowProComponent implements OnInit {

 
  @Input() medecin: any;
  constructor(private router:Router) { }

  ngOnInit(): void {

    //this.averageScore = new Array(this.medecin.averageScore);

  }
  view(id:any) {
    let id_array = id.split("/");
    this.router.navigate([`detail/${id_array[3]}`]);
  }

}
