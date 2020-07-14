import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { InitialSetupService } from "src/app/service/initialSetup/InitialSetup.service";
import { Setup } from "src/app/model/Setup";
import { getUser } from "src/app/helpers/storage.helper";
import { load } from "@angular/core/src/render3";

@Component({
  selector: "app-start-journey",
  templateUrl: "./start-journey.component.html",
  styleUrls: ["./start-journey.component.css"],
})
export class StartJourneyComponent implements OnInit {
  public initialSetup: Setup = new Setup();
  public initialSetupList: Setup[];

  constructor(
    public router: Router,
    public initialSetupService: InitialSetupService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const user = getUser();
    this.initialSetupService.retrieveSetup(user.user._id).subscribe(
      (data) => {
        this.initialSetupList = data as Setup[];
        console.log(this.initialSetupList);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  startJourney(setupId) {
    this.router.navigate(["/home/journey"]);
  }

  deleteJourney(setupId) {
    this.initialSetupService.deleteSetup(setupId).subscribe(
      (data) => {
        console.log("success");
        this.loadData();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
