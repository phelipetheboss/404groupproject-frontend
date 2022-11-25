import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
// import { datasource } from '../../../model/static.datasource';


@Injectable({
  providedIn: 'root'
})
export class CrudHttpService {
  apiUrlPostLogin: string = 'http://localhost:3000/api/login';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  auth_token: string = "";
  constructor(private http: HttpClient) { }

  authenticate(email: string, pass: string): Observable<boolean> {
    let API_URL = `${this.apiUrlPostLogin}`;
    
    // let response = this.http.post<JSON>(API_URL, {name:email, password:pass} );
    console.log("I'm here 1");

    return this.http.post(API_URL, {name:email, password:pass} ).pipe(map(
      response => {
        console.log("I'm here 2");
        
        // this.auth_token = response.success ? response.token : null;
        // return response.success;
        return Observable.create(false);
    }));
    

    //This is for test
    // this.auth_token = "Token test frontend";
    // console.log("token=" + this.auth_token);
    // return Observable.create(false);

  }



}
