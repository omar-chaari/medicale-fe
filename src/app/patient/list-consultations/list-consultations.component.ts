import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { ConsultationService } from 'src/app/services/consultation.service';

@Component({
  selector: 'app-list-consultations',
  templateUrl: './list-consultations.component.html',
  styleUrls: ['./list-consultations.component.css']
})
export class ListConsultationsComponent {

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;


  name: string = "";
  consultations: any = [];
  verification: any;
  page = 1;
  count = 0;
  tableSizes = [10];
  tableSize = this.tableSizes[0];
  ConsultationName: any;

  sortColumn: string = 'date'; // Default sorting column
  sortOrder: string = 'asc'; // Default sorting order: 'asc' or 'desc'


  dataSource = new MatTableDataSource<any>(this.consultations);


  PatientName: string = "";
  date_debut: string = "";
  date_fin: string = "";
  showModal = false;
  document_fichier: string = "";
  document_description: string = "";
  document_id: number =0;
  @Input() id_patient: number = 0; // Receive the idPatient value from the parent component




  constructor(private route: ActivatedRoute,
    private consultationService: ConsultationService,
    private router: Router,
    private datePipe: DatePipe

  ) { }

  ngOnInit() {


    const limit = this.tableSize;
    const offset = (this.page - 1) * this.tableSize;


    this.fetchConsultations(limit, offset);

  }

  fetchConsultations(limit: number, offset: number): void {



    this.consultationService.SearchConsultations(this.id_patient, limit, offset).subscribe(
      (data: any) => {
        this.consultations = Object.values(data['data']);


        //console.log(this.consultations);

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
    this.fetchConsultations(this.tableSize, offset);
  }

  onTableSizeChange(event: any): void {

    this.tableSize = event.target.value;
    const offset = (this.page - 1) * this.tableSize;

    this.fetchConsultations(this.tableSize, offset);
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
    this.fetchConsultations(limit, offset);
  }

  getImageUrl(filename: string): any {
    var explodedArray = filename.split("/");
    filename = explodedArray[1];
    return this.consultationService.getImageUrl(filename);


  }

  
  openModel(document_fichier: string, document_description: string, document_id : number): void {

    this.document_fichier = document_fichier;
    this.document_description = document_description;
    this.document_id = document_id;

    this.showModal = true;

  }


  onFormCancel(): void {
    this.showModal = false;
  }
  getFileNameFromPath(filePath: string): string {
    const parts = filePath.split('\\');
    return parts[parts.length - 1];
  }
}

