import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from 'src/app/services/consultation.service';
import { DatatableService } from 'src/app/services/datatable.service';

@Component({
  selector: 'app-delete-consultation',
  templateUrl: './delete-consultation.component.html',
  styleUrls: ['./delete-consultation.component.css']
})
export class DeleteConsultationComponent {
  element: any; // Replace 'any' with your element's type or interface
  id:any; 
  constructor(
    private datatableService: DatatableService,
    private route: ActivatedRoute,
    private router: Router,
    private consultationService: ConsultationService,

  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id=id;
    this.getConsultation(id);

   console.log( this.id);

  }

  deleteElement(): void {
    this.consultationService.delete(this.element.id).subscribe(() => {
   
       this.router.navigate([`/professionnel/edit-dossier/${this.element.patient}`]);

    });
  }

  cancel(): void {
    this.router.navigate([`/professionnel/edit-dossier/${this.element.patient}`]);

  }
  getConsultation(id: any): void {



    const table = "consultations";

    this.datatableService.showRecord(id, table).subscribe(
      (data: any  )=> {
        this.element = data;

        
             console.log(this.element);
      },
      err => {
        //   console.log(err);
      }
    );
  }
}
