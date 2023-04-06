import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from 'src/app/services/medecin.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-pro',
  templateUrl: './list-pro.component.html',
  styleUrls: ['./list-pro.component.css']
})
export class ListProComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  gov: string;
  spec: string;
  name: string;
  medecins: any;
  page = 1;
  count = 0;
  tableSizes = [10];
  tableSize = this.tableSizes[0];

  MedecinName: any;
  SpecialityList;
  GouvernoratList;


  dataSource = new MatTableDataSource<any>(this.medecins);


  constructor(private route: ActivatedRoute,
    private medecinService: MedecinService,
    private router: Router

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gov = params['gov'];
      this.spec = params['spec'];
      this.name = params['name'];

      const limit = this.tableSize;
      const offset = (this.page - 1) * this.tableSize;
      this.fetchMedecins(limit, offset);
    });

    this.fetchSpeciality();
    this.fetchGouvernorat();
  }

  fetchMedecins(limit: number, offset: number): void {
    var where;
    var tableID;
    var gouvernorat = this.gov;
    var medecinName = this.MedecinName;
    var speciality = this.spec;

    if (gouvernorat != "") {
      where += "governorate='" + gouvernorat + "' ";
    }

    tableID = "users";

    this.medecinService.SearchMedecins(gouvernorat, speciality, medecinName, limit, offset).subscribe(
      (data: any  )=> {
        this.medecins = data['data'];
        this.count = data['totalItems'];

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
      err => {}
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

    this.fetchMedecins(this.tableSize,offset);
  }
  submit(form) {

    this.gov = form.value.gouvernorat ;
    this.MedecinName = form.value.MedecinName ;
    this.spec = form.value.speciality ;



    this.fetchMedecins(10,0);

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}


