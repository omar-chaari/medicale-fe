import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableService } from 'src/app/services/datatable.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-dossiers',
  templateUrl: './list-dossiers.component.html',
  styleUrls: ['./list-dossiers.component.css']
})
export class ListDossiersComponent {

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  gov: string = "";
  spec: string = "";
  email: string = "";

  name: string = "";
  patients: any = [];
  verification: any;
  page = 1;
  count = 0;
  tableSizes = [10];
  tableSize = this.tableSizes[0];
  PatientName: any;
  pro:number=0;
  sortColumn: string = 'verification'; // Default sorting column
  sortOrder: string = 'asc'; // Default sorting order: 'asc' or 'desc'
  id_unique: string="";
  dataSource = new MatTableDataSource<any>(this.patients);


  constructor(private route: ActivatedRoute,
    private datatableService: DatatableService,
    private router: Router,
    private datePipe: DatePipe

  ) {

  

   }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.name = params['name'];

      const limit = this.tableSize;
      const offset = (this.page - 1) * this.tableSize;
      this.fetchPatients(limit, offset);
    });

  }

  fetchPatients(limit: number, offset: number): void {


    var where: string = " 1=1 ";
    var tableID;


    var patientName = this.PatientName;
    var verification = "1";
    var email = this.email;

    var id_unique = this.id_unique;

    if (verification != "" && verification != undefined) {
      where += "and verification='" + verification + "' ";
    }

    if (id_unique != "" && id_unique != undefined) {
      where += "and id_unique LIKE'%" + id_unique + "%' ";
    }
    if (email != "" && email != undefined) {
      where += "and email LIKE'%" + email + "%' ";
    }
    if (patientName != "" && patientName != undefined) {
      where += "and (first_name LIKE'%" + patientName + "%' or last_name LIKE'%" + patientName + "%' )";
    }



    tableID = "users";

    let fields = "id,first_name,last_name,email,phone,address,created_at,verification,sexe,birthday";

    this.datatableService.list(fields, "patients", where, limit, offset, this.sortColumn, this.sortOrder).subscribe(
      (data: any) => {
        this.patients = data['data'];

        console.log(this.patients);
        
        this.count = data['totalItems'];


      },
      err => {
        console.log(err);
      }
    );
  }






  onTableDataChange(event: any) {
    this.page = event.pageIndex + 1;
    const offset = event.pageIndex * this.tableSize;
    this.fetchPatients(this.tableSize, offset);
  }

  onTableSizeChange(event: any): void {

    this.tableSize = event.target.value;
    const offset = (this.page - 1) * this.tableSize;

    this.fetchPatients(this.tableSize, offset);
  }
  submit(form: any) {

    console.log("list-patients-search")
    this.PatientName = form.value.PatientName;

    this.verification = form.value.verification;

    this.email = form.value.email;
    this.id_unique = form.value.id_unique;

     this.fetchPatients(10, 0);

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  sortTable(column: string): void {
    if (this.sortColumn === column) {
      // If the current sorting column is clicked again, toggle the sorting order
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // If a new sorting column is clicked, set the new column and reset the sorting order to 'asc'
      this.sortColumn = column;
      this.sortOrder = 'asc';
    }

    const limit = this.tableSize;
    const offset = (this.page - 1) * this.tableSize;
    this.fetchPatients(limit, offset);
  }

  getCookie(name: string): string | null {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift() || null;
    }
    return null;
  }
}


