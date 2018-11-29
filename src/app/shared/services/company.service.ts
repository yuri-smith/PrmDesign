import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Company, CompanyProfile } from '../models';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest
} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class CompanyService {
  apiUrl = environment.apiURL;
  constructor(
    private http: HttpClient
  ) { }

  getCompanies(): Observable<any> {
    return this.http.get<Company[]>(`${this.apiUrl}/companies`, {
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders().append('AUTH_TEST', 'RAND AUTH KEY'),
    });
  }

  getCompany(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/companies/` + id.toString(), {
      observe: 'response',
      responseType: 'json',
    });
  }

  getCompanyProfile(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/companyprofiles/` + id.toString(), {
      observe: 'response',
      responseType: 'json',
    });
  }

  addCompany(company: Company): Observable<any> {
    return this.http.post(`${this.apiUrl}/companies`, company, {
      observe: 'response',
      responseType: 'json',
    });
  }

  putCompany(id: number, company: Company) {
    return this.http.put(`${this.apiUrl}/companies/` + id.toString(), company, {
      observe: 'response',
      responseType: 'json',
    });
  }

  deleteCompany(id: number) {
    return this.http.delete(`${this.apiUrl}/companies/` + id.toString(), {
      observe: 'response',
      responseType: 'json',
    });
  }
}
