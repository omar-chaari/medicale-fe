import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from 'src/app/services/consultation.service';
import { DatatableService } from 'src/app/services/datatable.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-afficher-document',
  templateUrl: './afficher-document.component.html',
  styleUrls: ['./afficher-document.component.css']
})
export class AfficherDocumentComponent {


  document_fichier: string = "";
  document_description: string = "";

  baseImageWidth = 500;
  baseImageHeight = 1000;
  id = 0;
  id_dossier = 0 ;
  id_consultation = 0 ;
  element:any = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private consultationService: ConsultationService,
    private datatableService: DatatableService,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.document_fichier = params['document_fichier'];
      this.document_description = params['document_description'];
      this.id = params['id'];
      this.id_dossier = params['id_dossier'];
      this.id_consultation = params['id_consultation'];
      this.getDocument(this.id);

    });



  }


  getFileNameFromPath(filePath: string): string {
    const parts = filePath.split('\\');
    return parts[parts.length - 1];
  }


  zoomIn() {
    this.baseImageWidth += 10;
    this.baseImageHeight += 10;
  }

  zoomOut() {
    this.baseImageWidth -= 10;
    this.baseImageHeight -= 10;
  }

  getImageUrl(filename: string): any {
    var explodedArray = filename.split("/");
    filename = explodedArray[1];
    return this.consultationService.getImageUrl(filename);


  }


  getDocument(id: number): void {



    const table = "documents";

    this.datatableService.showRecord(id, table).subscribe(
      (data: any) => {
        this.element = data;

        //     console.log(this.medecin);
      },
      err => {
        //   console.log(err);
      }
    );
  }

}


