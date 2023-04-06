import { Component, OnInit, ViewChild } from '@angular/core';
import { MedecinService } from 'src/app/services/medecin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-professionals',
  templateUrl: './list-professionals.component.html',
  styleUrls: ['./list-professionals.component.css']
})
export class ListProfessionalsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  gov: string;
  spec: string;
  email: string;

  name: string;
  medecins: any;
  verification: any;
  page = 1;
  count = 0;
  tableSizes = [10];
  tableSize = this.tableSizes[0];
  MedecinName: any;
  SpecialityList = [];
  GouvernoratList;

  sortColumn: string = 'verification'; // Default sorting column
  sortOrder: string = 'asc'; // Default sorting order: 'asc' or 'desc'


  dataSource = new MatTableDataSource<any>(this.medecins);


  constructor(private route: ActivatedRoute,
    private medecinService: MedecinService,
    private router: Router,
    private datePipe: DatePipe

  ) { }

  ngOnInit() {
    this.fetchSpeciality();
    this.fetchGouvernorat();

    this.route.params.subscribe(params => {
      this.gov = params['gov'];
      this.spec = params['spec'];
      this.name = params['name'];
      this.email = "";

      const limit = this.tableSize;
      const offset = (this.page - 1) * this.tableSize;
      this.fetchMedecins(limit, offset);
    });

  }

  fetchMedecins(limit: number, offset: number): void {
    var where;
    var tableID;
    var gouvernorat = this.gov;
    var medecinName = this.MedecinName;
    var speciality = this.spec;
    var verification = this.verification;


    if (gouvernorat != "") {
      where += "governorate='" + gouvernorat + "' ";
    }

    tableID = "users";

    this.medecinService.SearchMedecinsAdmin(gouvernorat, speciality, medecinName, verification, this.email, limit, offset, this.sortColumn, this.sortOrder).subscribe(
      (data: any  )=> {
        this.medecins = data['data'];

        this.count = data['totalItems'];

        console.log("count", this.count);
      },
      err => {
        console.log(err);
      }
    );
  }

  fetchSpeciality(): void {
    this.medecinService.getAllSpeciality().subscribe(
      (data: any  )=> {
        this.SpecialityList = data['data'];
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

  onTableDataChange(event: any) {
    this.page = event;
    const offset = (this.page["pageIndex"]) * this.tableSize;
    this.fetchMedecins(this.tableSize, offset);

  }

  onTableSizeChange(event: any): void {

    this.tableSize = event.target.value;
    const offset = (this.page - 1) * this.tableSize;

    this.fetchMedecins(this.tableSize, offset);
  }
  submit(form) {

    this.gov = form.value.gouvernorat;
    this.MedecinName = form.value.MedecinName;
    this.spec = form.value.speciality;

    this.verification = form.value.verification;

    this.email = form.value.email;

    this.fetchMedecins(10, 0);

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
    this.fetchMedecins(limit, offset);
  }
}


