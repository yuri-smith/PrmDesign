import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Currency } from '../models';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class CurrencyService {
  apiUrl = environment.apiURL;
  constructor(
    private http: HttpClient
  ) { }

  getCurrencies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/currencies`, {
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders().append('AUTH_TEST', 'RAND AUTH KEY'),
    });
  }

  getCurrency(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/currencies/` + id.toString(), {
      observe: 'response',
      responseType: 'json',
    });
  }

  addCurrency(currency: Currency): Observable<any> {
    return this.http.post(`${this.apiUrl}/currencies`, currency, {
      observe: 'response',
      responseType: 'json',
    });
  }

  putCurrency(id: number, currency: Currency) {
    return this.http.put(`${this.apiUrl}/currencies/` + id.toString(), currency, {
      observe: 'response',
      responseType: 'json',
    });
  }

  deleteCurrency(id: number) {
    return this.http.delete(`${this.apiUrl}/currencies/` + id.toString(), {
      observe: 'response',
      responseType: 'json',
    });
  }

}
