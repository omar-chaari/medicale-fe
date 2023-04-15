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

  showRecord(id: any, table: any) {

    var url = this.Url + "/show-record?";
    url += "id=" + id;
    url += "&table=" + table;

    return this.httpClient.get(url);
  }




  list(filelds = '', table = '', where = '', limit = 10, offset = 0, sortColumn: string,
    sortOrder: string) {

    let useFieldsInQuery = 1;
    var url = this.Url + "/list-datatable?";
    url += "fields=" + filelds;
    url += "&tableID=" + table;
    url += "&where=" + where;
    url += "&results_per_page=" + limit;
    url += "&order_by=" + sortColumn;
    url += "&sortOrder=" + sortOrder;
    url += "&page=" + offset;
    url += "&useFieldsInQuery=" + useFieldsInQuery;

    console.log(url);

    return this.httpClient.get(url);
  }

  update(record: any, table: any, id: any, cmd: string): Observable<any> {

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
  create(record: any, table: string): Observable<any> {
    const url = this.Url + '/insert-datatable';


    const body = {
      table: table,
      data: {

        form_data: record
      }
    };

    return this.httpClient.post(url, body);
  }
  delete(id_element: any, table: string): Observable<any> {
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
