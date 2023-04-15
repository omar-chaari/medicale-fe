import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableService } from 'src/app/services/datatable.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent {

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  gov: string ="" ;
  spec: string="";
  email: string="";

  name: string="";
  patients: any=[];
  verification: any;
  page = 1;
  count = 0;
  tableSizes = [10];
  tableSize = this.tableSizes[0];
  PatientName: any;
  SpecialityList: Speciality[] = [];
  GouvernoratList : Gouvernorat[]=[] ;

  //sortColumn: string = 'verification'; // Default sorting column
  sortOrder: string = 'asc'; // Default sorting order: 'asc' or 'desc'
  sortColumn: string = 'created_at';

  dataSource = new MatTableDataSource<any>(this.patients);


  constructor(private route: ActivatedRoute,
    private datatableService: DatatableService,
    private router: Router,
    private datePipe: DatePipe

  ) { }

  ngOnInit() {
    //this.fetchSpeciality();
    //this.fetchGouvernorat();

    this.route.params.subscribe(params => {
      //this.gov = params['gov'];
      //this.spec = params['spec'];
      this.name = params['name'];
      //this.email = "";

      const limit = this.tableSize;
      const offset = (this.page - 1) * this.tableSize;
      this.fetchPatients(limit, offset);
    });

  }

  fetchPatients(limit: number, offset: number): void {
    var where:string="";
    var tableID;
    var patientName = this.PatientName;




    tableID = "users";
    /*

      list(filelds = '', table = '', where = '', limit = 10, offset = 0, sortColumn: string,
    sortOrder: string) {

    */
   let fields="first_name,last_name,email,phone,address,created_at";

    this.datatableService.list(fields, "patients", "", limit, offset, this.sortColumn, this.sortOrder).subscribe(
      (data: any  )=> {
        this.patients = data['data'];

        this.count = data['totalItems'];

         //console.log("count", this.count);
      },
      err => {
        console.log(err);
      }
    );
  }

 



  /*onTableDataChange(event: any) {
    this.page = event;
    const offset = (this.page["pageIndex"]) * this.tableSize;
    this.fetchPatients(this.tableSize, offset);

  }*/

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
  submit(form:any) {

    console.log("list-patients-search")
    this.gov = form.value.gouvernorat;
    this.PatientName = form.value.PatientName;
    this.spec = form.value.speciality;

    this.verification = form.value.verification;

    this.email = form.value.email;

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
}


interface Speciality {
  speciality: string;
  // Ajoutez d'autres propriétés si nécessaire
}
interface Gouvernorat {
  governorate: string;
  // Ajoutez d'autres propriétés si nécessaire
}