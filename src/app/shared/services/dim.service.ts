import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Dim } from '../models';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';
// import { strictEqual } from 'assert';
// import 'rxjs/add/operator/map';
// import { Options } from 'selenium-webdriver/firefox';

@Injectable()
export class DimService {

  apiUrl = environment.apiURL;

  constructor(
    private http: HttpClient,
  ) {}

  getDims(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dims`, {
      observe: 'body',
      responseType: 'json',
      headers: new HttpHeaders().append('AUTH_TEST', 'RAND AUTH KEY'),
      // params: new HttpParams().set('id', '1')
    });
  }

  getDim(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/dims/` + id.toString(), {
      observe: 'response',
      responseType: 'json',
    });
  }

  addDim(dim: Dim): Observable<any> {
    return this.http.post(`${this.apiUrl}/dims`, dim, {
      observe: 'response',
      responseType: 'json',
    });
  }

  putDim(id: number, dim: Dim) {
    return this.http.put(`${this.apiUrl}/dims/` + id.toString(), dim, {
      observe: 'response',
      responseType: 'json',
    });
  }

  deleteDim(id: number) {
    return this.http.delete(`${this.apiUrl}/dims/` + id.toString(), {
      observe: 'response',
      responseType: 'json',
    });
  }

}
