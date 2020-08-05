import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { getUser, sessionSetItem } from "src/app/helpers/storage.helper";
import { Setup } from "src/app/model/Setup";
import { InitialSetupService } from "src/app/service/initialSetup/InitialSetup.service";

@Component({
  selector: "app-start-journey",
  templateUrl: "./start-journey.component.html",
  styleUrls: ["./start-journey.component.css"],
})
export class StartJourneyComponent implements OnInit {
  public initialSetup: Setup = new Setup();
  public initialSetupList: Setup[];
  user;

  journeyPercentage;

  constructor(
    public router: Router,
    public initialSetupService: InitialSetupService,
  ) { }

  ngOnInit() {
    this.user = getUser();
    this.loadData();
  }

  loadData() {
    const user = getUser();
    this.initialSetupService.retrieveSetup(user.user._id).subscribe(
      (data) => {
        this.initialSetupList = data as Setup[];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  startJourney(setupId) {
    sessionSetItem("journeyId", setupId);
    this.router.navigate(["/home/journey"], { state: { journeyId: setupId } });
  }

  deleteJourney(setupId) {
    this.initialSetupService.deleteSetup(setupId).subscribe(
      (data) => {
        this.loadData();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
