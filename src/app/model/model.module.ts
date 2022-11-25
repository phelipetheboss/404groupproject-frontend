import { NgModule } from "@angular/core";
import { UserRepository } from "./user.repository";
import { StaticDatasource } from "./static.datasource";
import { LoginService } from "../pages/login/login.service";

@NgModule({
  providers: [UserRepository, StaticDatasource, LoginService]
})
export class UserModule { }
