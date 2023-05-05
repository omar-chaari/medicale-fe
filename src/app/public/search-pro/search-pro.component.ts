import { Component, OnInit } from '@angular/core';
import { MedecinService } from 'src/app/services/medecin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-pro',
  templateUrl: './search-pro.component.html',
  styleUrls: ['./search-pro.component.css']
})
export class SearchProComponent implements OnInit {

  medecins: any;
  page = 1;
  count = 0;
  tableSize = 8;
  tableSizes = [8];
  MedecinName: any;
  speciality: any;
  SpecialityList: Speciality[] = [];
  GouvernoratList : Gouvernorat[]=[] ;
  gouvernorat: any;



  constructor(

    private medecinService: MedecinService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.fetchSpeciality();
    this.fetchGouvernorat();

  }

  fetchSpeciality(): void {

    this.medecinService.getAllSpeciality().subscribe(
      (data: any  )=> {

        this.SpecialityList = data['data'];


      }
      , err => {
        console.log(err);
        
      }
    );

  }
  fetchGouvernorat(): void {

    this.medecinService.getAllGouvernorat().subscribe(
      (data: any  )=> {

        this.GouvernoratList = data['data'];


      }
      , err => {
       
      }
    );

  }


  submit(form:any) {

    this.gouvernorat = form.value.gouvernorat ? form.value.gouvernorat : "*";
    this.MedecinName = form.value.MedecinName ? form.value.MedecinName : "*";
    this.speciality = (form.value.speciality) ? form.value.speciality : "*";

    this.router.navigate(['/public/list-pro/'+this.MedecinName+'/'+this.speciality+'/'+this.gouvernorat]);


  }


}
interface Speciality {
  speciality: string;
  // Ajoutez d'autres propriétés si nécessaire
}
interface Gouvernorat {
  governorate: string;
  // Ajoutez d'autres propriétés si nécessaire
}
