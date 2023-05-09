import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

    /*

const url = 'http://127.0.0.1:8000/api/list-datatable';
let params = new HttpParams()
  .set('fields', 'first_name,last_name,email,phone,address,created_at,verification')
  .set('tableID', 'patients')
  .set('where', '1=1');

return this.http.get(url, { params });

    */
    let useFieldsInQuery = 1;
    var url = this.Url + "/list-datatable?";

    let params = new HttpParams()
      .set('fields', filelds)
      .set('tableID', table)
      .set('where', where)
      .set('results_per_page', limit)
      .set('order_by', sortColumn)
      .set('sortOrder', sortOrder)
      .set('page', offset)
      .set('useFieldsInQuery', useFieldsInQuery)
      ;


    return this.httpClient.get(url, { params });

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
  create(record: any, table: string, cmd: string ="" ): Observable<any> {
    const url = this.Url + '/insert-datatable';


    const body = {
      table: table,
      data: {

        form_data: record
      },
      cmd: cmd,

    };

    console.log(body);
    console.log(url);
    
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
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: body
    };

   
    return this.httpClient.delete(url, httpOptions);
  }
}
