import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDatasource {
  private users: User[] = [
    new User(1, 'dudu_missono', 'myemail1@email.ca', 'Edu Missono'),
    new User(2, 'keanu_reeves', 'myemail2@email.ca', 'Keanu Reeves'),
    new User(3, 'ryan_reynolds', 'myemail3@email.ca', 'Ryan Reynolds'),
    new User(4, 'celine_dion', 'myemail4@email.ca', 'Celine Dion'),
    new User(5, 'bruce_willis', 'myemail5@email.ca', 'Bruce Willis'),
    new User(6, 'quentin_tarantino', 'myemail6@email.ca', 'Quentin Tarantino'),
    new User(7, 'tim_burton', 'myemail7@email.ca', 'Tim Burton'),
    new User(8, 'jim_henson', 'myemail8@email.ca', 'Jim Henson'),
  ];

  getUsers(): Observable<User[]> {
    return from([this.users]);
  }
}
