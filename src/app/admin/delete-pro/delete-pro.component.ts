import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableService } from 'src/app/services/datatable.service';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-delete-pro',
  templateUrl: './delete-pro.component.html',
  styleUrls: ['./delete-pro.component.css']
})
export class DeleteProComponent implements OnInit {

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
    this.getMedecin(id);

   console.log( this.id);

  }

  deleteElement(): void {
    this.datatableService.delete(this.id, "users").subscribe(() => {
      this.router.navigate(['/admin/list-pro']); // Navigate back to the main page or any other page after deleting
    });
  }

  cancel(): void {
    this.router.navigate(['/admin/list-pro']); // Navigate back to the main page or any other page
  }
  getMedecin(id: any): void {



    const table = "users";

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
