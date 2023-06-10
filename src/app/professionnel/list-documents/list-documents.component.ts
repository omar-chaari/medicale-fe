import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DatatableService } from 'src/app/services/datatable.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { ConsultationService } from 'src/app/services/consultation.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.css']
})
export class ListDocumentsComponent {

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  email: string = "";

  name: string = "";
  documents: any = [];
  page = 1;
  count = 0;
  tableSizes = [10];
  tableSize = this.tableSizes[0];

  sortColumn: string = 'created_at'; // Default sorting column
  sortOrder: string = 'desc'; // Default sorting order: 'asc' or 'desc'

  dataSource = new MatTableDataSource<any>(this.documents);
  @Input() consultation: number = 0; // Receive the idPatient value from the parent component
  showModal = false;
  document_fichier: string = "";
  document_description: string = "";
  document_id: number = 0;

  constructor(private route: ActivatedRoute,
    private datatableService: DatatableService,
    private router: Router,
    private datePipe: DatePipe,
    private consultationService: ConsultationService,
    private documentService: DocumentService,

  ) { }

  ngOnInit() {


    const limit = this.tableSize;
    const offset = (this.page - 1) * this.tableSize;
    this.fetchDocuments(limit, offset);


  }

  fetchDocuments(limit: number, offset: number): void {


    var where: string;
    var tableID;



    where = "consultation='" + this.consultation + "' ";




    tableID = "users";

    let fields = "id,fichier,description";

    this.datatableService.list(fields, "documents", where, limit, offset, this.sortColumn, this.sortOrder).subscribe(
      (data: any) => {
        this.documents = data['data'];

        console.log(this.documents);

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
    this.fetchDocuments(this.tableSize, offset);
  }

  onTableSizeChange(event: any): void {

    this.tableSize = event.target.value;
    const offset = (this.page - 1) * this.tableSize;

    this.fetchDocuments(this.tableSize, offset);
  }
  submit(form: any) {


    this.fetchDocuments(10, 0);

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
    this.fetchDocuments(limit, offset);
  }
  getImageUrl(filename: string): any {
    var explodedArray = filename.split("/");
    filename = explodedArray[1];
    return this.consultationService.getImageUrl(filename);


  }


  openModel(document_fichier: string, document_description: string, document_id: number): void {

    this.document_fichier = document_fichier;
    this.document_description = document_description;
    this.document_id = document_id;

    this.showModal = true;

  }


  onFormCancel(): void {
    this.showModal = false;
  }

  deleteElement(id_element: number): void {
    this.documentService.documentDelete(id_element).subscribe(() => {
      this.fetchDocuments(this.tableSize, (this.page - 1) * this.tableSize);

      this.router.navigate([`/professionnel/edit-consultation/${this.consultation}`]);

    });
  }


  updateDocuments(): void {
    const limit = this.tableSize;
    const offset = (this.page - 1) * this.tableSize;
    this.fetchDocuments(limit, offset);
  }

  getFileNameFromPath(filePath: string): string {
    const parts = filePath.split('\\');
    return parts[parts.length - 1];
  }

}


