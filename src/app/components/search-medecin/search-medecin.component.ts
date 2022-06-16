import { Component, OnInit } from '@angular/core';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-search-medecin',
  templateUrl: './search-medecin.component.html',
  styleUrls: ['./search-medecin.component.css']
})
export class SearchMedecinComponent implements OnInit {


  medecins: any;
  page = 1;
  count = 0;
  tableSize = 8;
  tableSizes = [8];
  MedecinName: any;
  speciality: any;
  SpecialityList;
  GouvernoratList;
  gouvernorat: any;



  constructor(

    private medecinService: MedecinService,


  ) { }

  ngOnInit(): void {
    //this.fetchMedecins();
    this.fetchSpeciality();
    this.fetchGouvernorat();

  }
  fetchMedecins(): void {

    /*
     getAllmedecins(tableID,where='',limit=-1,page=1 , 
     fields="" ,order_by="",search="" ) {
 
    */
    var where;
    var tableID;
    var limit;
    var page;
    var fields;
    var order_by;
    var search;



    /*
        this.gouvernorat=form.value.gouvernorat;
  this.MedecinName=form.value.MedecinName;
  this.speciality=form.value.speciality;
  

    */

    if (this.gouvernorat != "")
      where += "governorate='" + this.gouvernorat + "' ";
    if (this.speciality != "") {

    }
    tableID = "users";

    var gouvernorat = this.gouvernorat;
    var medecinName = this.MedecinName;
    var speciality = this.speciality;
    this.medecinService.SearchMedecins(gouvernorat , speciality,medecinName, 
      this.page ).subscribe(
      data => {
        console.log(data['data']);
        this.medecins = data['data'];

        this.count= data['totalItems'];
      }
      , err => {
        console.log(err);
        /*if (err.status == 0 || err.status == 500) { this.message_error = "Une erreur a été rencontré. veuillez réessayer plus tard "; }
        else if (err.status == 422) {
          //console.log(err.error.errors);

          this.message_error = err.error.errors;

        }*/
        //handle errors here
      }
    );

  }
  fetchSpeciality(): void {

    this.medecinService.getAllSpeciality().subscribe(
      data => {

        console.log(data['data']);
        this.SpecialityList = data['data'];


      }
      , err => {
        console.log(err);
        /*if (err.status == 0 || err.status == 500) { this.message_error = "Une erreur a été rencontré. veuillez réessayer plus tard "; }
        else if (err.status == 422) {
          //console.log(err.error.errors);

          this.message_error = err.error.errors;

        }*/
        //handle errors here
      }
    );

  }
  fetchGouvernorat(): void {

    this.medecinService.getAllGouvernorat().subscribe(
      data => {

        //console.log(data['data']);
        this.GouvernoratList = data['data'];


      }
      , err => {
        //console.log(err);
        /*if (err.status == 0 || err.status == 500) { this.message_error = "Une erreur a été rencontré. veuillez réessayer plus tard "; }
        else if (err.status == 422) {
          //console.log(err.error.errors);

          this.message_error = err.error.errors;

        }*/
        //handle errors here
      }
    );

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchMedecins();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchMedecins();
  }
  submit(form) {

    this.gouvernorat = form.value.gouvernorat;
    this.MedecinName = form.value.MedecinName;
    this.speciality = form.value.speciality;


    this.fetchMedecins();

  }


}
