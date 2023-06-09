import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableService } from 'src/app/services/datatable.service';
import { ViewChild } from '@angular/core';
import { ListDocumentsComponent } from '../list-documents/list-documents.component';

@Component({
  selector: 'app-edit-consultation',
  templateUrl: './edit-consultation.component.html',
  styleUrls: ['./edit-consultation.component.css']
})
export class EditConsultationComponent {

  @ViewChild('listDocuments', { static: false }) listDocuments!: ListDocumentsComponent;

  consultation: any;
  id: number = 0;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datatableService: DatatableService,

  ) {


  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.getConsultation(this.id);
    });

  }

  getConsultation(id: any): void {



    const table = "consultations";

    this.datatableService.showRecord(id, table).subscribe(
      (data: any) => {
        this.consultation = data;


      },
      err => {
        //   console.log(err);
      }
    );
  }




  onSubmit() {

    // Call the consultation service to update the consultation with the new values


    var cmd = "";




    let record = {
      "motif": this.consultation.motif,
      "notes": this.consultation.notes,
    }


    this.datatableService.update(record, "consultations", this.id, cmd).subscribe(
      response => {

        this.router.navigate([`/professionnel/edit-dossier/${this.consultation.patient}`]);
      },
      error => {
        console.log("Failed to update consultation", error);
      }
    );
  }


  updateImages(): void {
    this.listDocuments.updateDocuments();
  }





}
