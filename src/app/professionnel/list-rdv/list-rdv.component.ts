import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { AppointementService } from 'src/app/services/appointement.service';

@Component({
  selector: 'app-list-rdv',
  templateUrl: './list-rdv.component.html',
  styleUrls: ['./list-rdv.component.css']
})
export class ListRdvComponent {

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;


  name: string = "";
  appointements: any = [];
  verification: any;
  page = 1;
  count = 0;
  tableSizes = [10];
  tableSize = this.tableSizes[0];
  AppointementName: any;

  sortColumn: string = 'date_debut'; // Default sorting column
  sortOrder: string = 'asc'; // Default sorting order: 'asc' or 'desc'


  dataSource = new MatTableDataSource<any>(this.appointements);

/*

    this.PatientName = form.value.PatientName;
    this.date_debut = form.value.date_debut;
    this.date_fin = form.value.date_fin;

*/
PatientName: string = "";
date_debut: string = "";
date_fin: string = "";



  constructor(private route: ActivatedRoute,
    private appointementService: AppointementService,
    private router: Router,
    private datePipe: DatePipe

  ) { }

  ngOnInit() {


    const limit = this.tableSize;
    const offset = (this.page - 1) * this.tableSize;

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
 //   const date_jourd_huit = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    const date_jourd_huit = `${year}-${month}-${day}`;

    this.date_debut=date_jourd_huit;

    this.fetchAppointements(limit, offset);

  }

  fetchAppointements(limit: number, offset: number): void {
    var where: string = "";
    var tableID;

    const jsonString = this.getCookie("pro_data");

    // Parse the JSON string back into an object
    let pro = 0;
    if (jsonString !== null) {

      const data = JSON.parse(jsonString);

      pro = data.user_id;
    }

 
    this.appointementService.SearchAppointementsPro(pro, this.date_debut, this.date_fin, limit, offset).subscribe(
      (data: any) => {
        this.appointements = data['data'];


        console.log(this.appointements);

        this.count = data['totalItems'];

        console.log("count", this.count);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }





  onTableDataChange(event: any) {
    this.page = event.pageIndex + 1;
    const offset = event.pageIndex * this.tableSize;
    this.fetchAppointements(this.tableSize, offset);
  }

  onTableSizeChange(event: any): void {

    this.tableSize = event.target.value;
    const offset = (this.page - 1) * this.tableSize;

    this.fetchAppointements(this.tableSize, offset);
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
    this.fetchAppointements(limit, offset);
  }
  getCookie(name: string): string | null {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift() || null;
    }
    return null;
  }

  submit(form: any) {

    console.log("list-patients-search")
    this.PatientName = form.value.PatientName;
    this.date_debut = form.value.date_debut;
    this.date_fin = form.value.date_fin;


    this.fetchAppointements(10, 0);

  }

}
