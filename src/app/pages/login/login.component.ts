import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudHttpService } from './crud/crud-http.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public password: string = "";
  public errorMessage: string = "";

  constructor(private crudHttpService: CrudHttpService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  formLogin(form: NgForm){  
    if(form.valid) {
      if(this.loginService.authenticate(this.email, this.password)) {
        this.router.navigateByUrl("/survey-results");
      } else {
        this.errorMessage = "E-mail or Password invalid"
        console.log(this.errorMessage);
      }
    }
  }

  // authenticate(email: string, password: string): Observable<boolean> {
  //   return this.crudHttpService.authenticate(email, password);
  // }

  // get authenticated(): boolean {
  //   return this.crudHttpService.auth_token != null && this.crudHttpService.auth_token != "";
  // }

  // logout() {
  //   this.crudHttpService.auth_token = "";
  // }


}
