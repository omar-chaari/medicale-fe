import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableService } from 'src/app/services/datatable.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent {

  element: any; // Replace 'any' with your element's type or interface
  id:any; 
  constructor(
    private datatableService: DatatableService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id=id;
    this.getPatient(id);

   console.log( this.id);

  }

  deleteElement(): void {
    this.datatableService.delete(this.id, "patients").subscribe(() => {
      this.router.navigate(['/admin/list-patients']); // Navigate back to the main page or any other page after deleting
    });
  }

  cancel(): void {
    this.router.navigate(['/admin/list-patients']); // Navigate back to the main page or any other page
  }
  getPatient(id: any): void {



    const table = "patients";

    this.datatableService.showRecord(id, table).subscribe(
      (data: any  )=> {
        this.element = data;

        //     console.log(this.medecin);
      },
      err => {
        //   console.log(err);
      }
    );
  }
}
