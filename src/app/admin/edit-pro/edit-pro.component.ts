import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableService } from 'src/app/services/datatable.service';
import { MedecinService } from 'src/app/services/medecin.service';
@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

  medecin: any;
  SpecialityList: any;
  GouvernoratList: any;
  id: number=0;
  oldVerified: number=0;
  newVerified: number=0;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datatableService: DatatableService,
    private medecinService: MedecinService

  ) {


  }

  ngOnInit(): void {



    this.fetchSpeciality();
    this.fetchGouvernorat();
    this.route.params.subscribe(params => {
      this.id = params['id'];

      // console.log("id", id);
      this.getMedecin(this.id);
    });

  }

  getMedecin(id: any): void {



    const table = "users";

    this.datatableService.showRecord(id, table).subscribe(
      (data: any  )=> {
        this.medecin = data;


        this.oldVerified = data["verification"];

 
      },
      err => {
        //   console.log(err);
      }
    );
  }
  fetchSpeciality(): void {
    this.medecinService.getAllSpeciality().subscribe(
      (data: any  )=> {
        this.SpecialityList = data['data'];
        // console.log(this.SpecialityList);

      },
      err => {
        console.log(err);
      }
    );
  }


  fetchGouvernorat(): void {
    this.medecinService.getAllGouvernorat().subscribe(
     (data: any  )=> {
        this.GouvernoratList = data['data'];
      },
      err => { }
    );
  }
  onSubmit() {

    // Call the medecin service to update the medecin with the new values


    var cmd = "";

    this.newVerified = this.medecin.verification;
    if (this.newVerified == 1 && this.oldVerified != 1) { cmd = "email_verif_professional"; }


    this.datatableService.update(this.medecin, "users", this.id, cmd).subscribe(
      response => {

        this.router.navigate(['/admin/list-pro']);
      },
      error => {
        console.log("Failed to update medecin", error);
      }
    );
  }



}
