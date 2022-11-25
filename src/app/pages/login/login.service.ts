import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudHttpService } from './crud/crud-http.service';

@Injectable()
export class LoginService {
    constructor( private crudHttpService: CrudHttpService ) { }

    authenticate(email: string, password: string): Observable<boolean> {
        return this.crudHttpService.authenticate(email, password);
    }

    get authenticated(): boolean {
        return this.crudHttpService.auth_token != null && this.crudHttpService.auth_token != "";
    }

    logout() {
        this.crudHttpService.auth_token = "";
    }
    
}
