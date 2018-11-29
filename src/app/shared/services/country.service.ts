import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Currency, Country } from '../models';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest
} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class CountryService {
  apiUrl = environment.apiURL;
  constructor(
    private http: HttpClient
  ) { }

  getCountries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/countries`, {
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders().append('AUTH_TEST', 'RAND AUTH KEY'),
    });
  }

  getCountry(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/countries/` + id.toString(), {
      observe: 'response',
      responseType: 'json',
    });
  }

  addCountry(country: Country): Observable<any> {
    return this.http.post(`${this.apiUrl}/countries`, country, {
      observe: 'response',
      responseType: 'json',
    });
  }

  putCountry(id: number, country: Country) {
    return this.http.put(`${this.apiUrl}/countries/` + id.toString(), country, {
      observe: 'response',
      responseType: 'json',
    });
  }
  deleteCountry(id: number) {
    return this.http.delete(`${this.apiUrl}/countries/` + id.toString(), {
      observe: 'response',
      responseType: 'json',
    });
  }

}
