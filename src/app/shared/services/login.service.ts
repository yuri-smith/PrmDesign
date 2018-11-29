import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest
} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {
  apiUrl = environment.apiURL;
  constructor(
    private http: HttpClient
  ) { }

  postUser(user: User): Observable<any> {
    let Params = new HttpParams();
    Params = Params.append('login', user.login);
    Params = Params.append('password', user.password);
    return this.http.post(`${this.apiUrl}/token`, { params: Params });
  }
}
