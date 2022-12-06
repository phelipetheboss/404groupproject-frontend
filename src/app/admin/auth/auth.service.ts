import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../model/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl       = 'http://localhost:3000/api/auth';
  private tempAuthUrl   = 'http://localhost:3000/api/auth';
  private loginPath     = 'login';
  private registerPath  = 'register';
  private logoutPath    = 'logout';
  private getUser       = 'user';

  constructor(private http : HttpClient) { }

  public isAuthenticated(): Boolean {
    let userData = localStorage.getItem('userInfo');
    
    if (userData && JSON.parse(userData)){
      return true;
    }
    else{
      return false;
    }
    
  }

  public authenticatedUser(): String {
    let userData = localStorage.getItem('userInfo');

    if (userData && JSON.parse(userData)){
      return JSON.parse(userData).username;
    }
    else{
      return "";
    }

  }

  public setUserInfo(user: any) {
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  clearStorage() {
    localStorage.clear();
  }

  public validate(username: string, password: string) {
    return this.http.post(`${ this.authUrl }/${ this.loginPath }`, { 'username': username, 'password': password }, httpOptions);
  }

  public registerUser(user: User) {
    return this.http.post(`${ this.authUrl }/${ this.registerPath }`, user, httpOptions);
  }

  public logoutUser() {
    return this.http.get(`${ this.authUrl }/${ this.logoutPath }`, httpOptions);
  }

  public getUserInfo(): Observable<User> {
    return this.http.get<User>(`${ this.authUrl }/${ this.getUser }`, httpOptions);
  }
}
