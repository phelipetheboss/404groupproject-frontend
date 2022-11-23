import { NgModule } from "@angular/core";
import { UserRepository } from "./user.repository";
import { StaticDatasource } from "./static.datasource";

@NgModule({
  providers: [UserRepository, StaticDatasource]
})
export class UserModule { }
