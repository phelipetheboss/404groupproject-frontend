import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
// import { datasource } from '../../../model/static.datasource';


@Injectable({
  providedIn: 'root'
})
export class CrudHttpService {
  apiUrlPostLogin: string = 'http://localhost:3000/api/post/login';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  auth_token: string = "";
  constructor(private http: HttpClient) { }

  authenticate(email: string, pass: string): Observable<boolean> {
    let API_URL = `${this.apiUrlPostLogin}`;
    return this.http.post<any>(API_URL, {name:email, password:pass} ).pipe(map(
      response => {
        this.auth_token = response.success ? response.token : null;
        return response.success;
    }));
    
    // this.auth_token = "this is a test token";
    // console.log("token=" + this.auth_token);
    // return Observable.create(true);

  }



}
