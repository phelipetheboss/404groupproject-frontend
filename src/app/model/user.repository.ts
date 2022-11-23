import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { StaticDatasource } from "./static.datasource";

@Injectable()
export class UserRepository {
  private users: User[] = [];
  private displayNames: (string | undefined)[] = [];

  constructor(private dataSource: StaticDatasource) {
    dataSource.getUsers().subscribe(data => {
      this.users = data;
      this.displayNames = data.map(u => u.displayName)
        .filter((un, index, array) => array.indexOf(un) === index).sort();
    })
  }

  getUsers(displayName: string): User[] {
    return this.users
      .filter(u => displayName == null || displayName === u.displayName);
  }

  // getUser(id: number): User {
  //   return this.users
  //     .find(u => u._id === id);
  // }

  // getDisplayNames(): string[] {
  //   return this.displayNames;
  // }
}
