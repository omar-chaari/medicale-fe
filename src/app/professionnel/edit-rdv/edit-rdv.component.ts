import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableService } from 'src/app/services/datatable.service';

@Component({
  selector: 'app-edit-rdv',
  templateUrl: './edit-rdv.component.html',
  styleUrls: ['./edit-rdv.component.css']
})
export class EditRdvComponent {

  appointement: any;
  id: number = 0;

  oldState: number = 0;
  oldDate: string = "";


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datatableService: DatatableService,

  ) {


  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];

      // console.log("id", id);
      this.getRdv(this.id);
    });

  }

  getRdv(id: any): void {



    const table = "appointements";

    this.datatableService.showRecord(id, table).subscribe(
      (data: any) => {
        this.appointement = data;

        this.oldState = data["state"];
        this.oldDate = data["date_debut"];


      },
      err => {
        //   console.log(err);
      }
    );
  }




  onSubmit() {

    // Call the appointement service to update the appointement with the new values


    var cmd = "";

    this.appointement.date_debut = this.formatDate(this.appointement.date_debut);


    this.datatableService.update(this.appointement, "appointements", this.id, cmd).subscribe(
      response => {

        const newState = this.appointement.state;


        const newDate = this.appointement.date_debut;

        if (newState == 1 && this.oldState != 1) { cmd = "email_confirm_rdv"; }

        if (newDate !=this.oldDate ) { cmd = "email_report_rdv"; }

        this.router.navigate(['/professionnel/list-rdv']);
      },
      error => {
        console.log("Failed to update appointement", error);
      }
    );
  }


  formatDate(date: string): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ('0' + (d.getMonth() + 1)).slice(-2); // add leading zero
    const day = ('0' + d.getDate()).slice(-2); // add leading zero
    const hours = ('0' + d.getHours()).slice(-2); // add leading zero
    const minutes = ('0' + d.getMinutes()).slice(-2); // add leading zero
    const seconds = '00'; // as per your requirement

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }




}
