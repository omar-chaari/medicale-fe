import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableService } from 'src/app/services/datatable.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent {

  patient: any;
  SpecialityList: any;
  GouvernoratList: any;
  id: number=0;
  oldVerified: number=0;
  newVerified: number=0;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datatableService: DatatableService,

  ) {


  }

  ngOnInit(): void {

   
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getMedecin(this.id);
    });

  }

  getMedecin(id: any): void {



    const table = "patients";

    this.datatableService.showRecord(id, table).subscribe(
      (data: any  )=> {
        this.patient = data;


        this.oldVerified = data["verification"];

 
      },
      err => {
        //   console.log(err);
      }
    );
  }
 


 
  onSubmit() {

    // Call the patient service to update the patient with the new values
    var cmd = "";
    this.newVerified = this.patient.verification;
    if (this.newVerified == 1 && this.oldVerified != 1) { cmd = "email_verif_patient"; }

    this.datatableService.update(this.patient, "patients", this.id, cmd).subscribe(
      response => {

        this.router.navigate(['/admin/list-patients']);
      },
      error => {
        console.log("Failed to update patient", error);
      }
    );
  }



}
