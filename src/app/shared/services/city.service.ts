import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Country, City } from '../models';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest
} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class CityService {
  apiUrl = environment.apiURL;
  constructor(
    private http: HttpClient
  ) { }

  getCities(): Observable<any> {
    return this.http.get<City[]>(`${this.apiUrl}/cities`, {
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders().append('AUTH_TEST', 'RAND AUTH KEY'),
    });
  }

  getCity(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/cities/` + id.toString(), {
      observe: 'response',
      responseType: 'json',
    });
  }
  addCity(city: City): Observable<any> {
    return this.http.post(`${this.apiUrl}/cities`, city, {
      observe: 'response',
      responseType: 'json',
    });
  }

  putCity(id: number, city: City) {
    return this.http.put(`${this.apiUrl}/cities/` + id.toString(), city, {
      observe: 'response',
      responseType: 'json',
    });
  }
  deleteCity(id: number) {
    return this.http.delete(`${this.apiUrl}/cities/` + id.toString(), {
      observe: 'response',
      responseType: 'json',
    });
  }

}
