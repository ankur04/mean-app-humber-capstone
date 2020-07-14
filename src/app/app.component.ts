import { Component } from "@angular/core";
import { getUser, removeUser } from "./helpers/storage.helper";
import { AppService } from "./service/app.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(public appService: AppService, public router: Router) {
    appService.user = getUser();
  }

  logout() {
    removeUser(this.appService);
    this.router.navigate(["/login"]);
  }
}
