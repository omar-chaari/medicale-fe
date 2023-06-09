import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DatatableService } from 'src/app/services/datatable.service';


@Component({
  selector: 'app-consulter-dossier',
  templateUrl: './consulter-dossier.component.html',
  styleUrls: ['./consulter-dossier.component.css']
})
export class ConsulterDossierComponent {


  user: any = {};
  users: any;
  message_error: any;
  message_success: any;
  id_patient: number = 0;
  patient: any;
  pro: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private datatableService: DatatableService,

    private route: ActivatedRoute,

  ) {

    this.patient = {
      first_name: '',
      last_name: '',
      address: '',
      phone: '',
      sexe: '',
      birthday: null,
      allergies: '',
      maladies_chroniques: '',
      notes_supplementaires: ''
    };

    this.route.params.subscribe(params => {
      this.id_patient = params['id'];
      this.getPatient(this.id_patient);
    });







  }


  ngOnInit(): void {


  }


  getPatient(id: any): void {



    const table = "patients";

    this.datatableService.showRecord(id, table).subscribe(
      (data: any) => {
        this.patient = data;




      },
      err => {
        //   console.log(err);
      }
    );
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

