import { Component, OnInit } from "@angular/core";
import { getUser, removeUser, sessionGetItem } from "./helpers/storage.helper";
import { AppService } from "./service/app.service";
import { Router } from "@angular/router";
import { JourneyService } from './service/journey/journey.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(public appService: AppService, public router: Router, private journeyService: JourneyService) {
    appService.user = getUser();
    journeyService.journey = sessionGetItem("journey");
  }

  ngOnInit(): void {
    this.appService.getTemplate();
  }

  logout() {
    removeUser(this.appService);
    this.router.navigate(["/login"]);
  }
}
