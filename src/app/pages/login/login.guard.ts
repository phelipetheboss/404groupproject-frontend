import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuard {
    constructor(private router: Router, private login: LoginService){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.login.authenticated){
            return true;
        } else {
            this.router.navigateByUrl("/login")
            return false;
        } 

        
    }



}