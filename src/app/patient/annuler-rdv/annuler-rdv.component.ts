import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableService } from 'src/app/services/datatable.service';

@Component({
  selector: 'app-annuler-rdv',
  templateUrl: './annuler-rdv.component.html',
  styleUrls: ['./annuler-rdv.component.css']
})
export class AnnulerRdvComponent {
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
    this.getRdv(id);

   console.log( this.id);

  }

  deleteElement(): void {
    this.datatableService.delete(this.id, "appointements").subscribe(() => {
      this.router.navigate(['/patient/list-rdv']); // Navigate back to the main page or any other page after deleting
    });
  }

  cancel(): void {
    this.router.navigate(['/patient/list-rdv']); // Navigate back to the main page or any other page
  }
  getRdv(id: any): void {



    const table = "appointements";

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
