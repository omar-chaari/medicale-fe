import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatatableService {
  Url = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  showRecord(id, table) {

    var url = this.Url + "/show-record?";
    url += "id=" + id;
    url += "&table=" + table;

    return this.httpClient.get(url);
  }

  update(record, table, id, cmd): Observable<any> {

    const url = this.Url + '/update-datatable';


    const body = {
      table: table,
      data: {
        keys: {
          id: id
        },
        form_data: record
      },
      cmd: cmd,
    };

    return this.httpClient.post(url, body);
  }
  create(record, table): Observable<any> {
    const url = this.Url + '/insert-datatable';


    const body = {
      table: table,
      data: {

        form_data: record
      }
    };

    return this.httpClient.post(url, body);
  }
  delete(id_element, table): Observable<any> {
    const url = this.Url + '/delete-datatable';



    const body = {
      table: table,
      where: [{

        id: id_element
      }]
    };
    //console.log("url", url);
    console.log("id", id_element);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: body
    };

    //console.log(body);

    return this.httpClient.delete(url, httpOptions);
  }
}
