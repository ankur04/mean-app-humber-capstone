import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { InitialSetupService } from "src/app/service/initialSetup/InitialSetup.service";
import { Setup } from "src/app/model/Setup";
import { getUser } from "src/app/helpers/storage.helper";

@Component({
  selector: "app-start-journey",
  templateUrl: "./start-journey.component.html",
  styleUrls: ["./start-journey.component.css"],
})
export class StartJourneyComponent implements OnInit {
  private initialSetup: Setup = new Setup();
  private initialSetupList: Setup[];

  constructor(
    private router: Router,
    private initialSetupService: InitialSetupService
  ) {}

  ngOnInit() {
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

  startJourney() {
    this.router.navigate(["/home/journey"]);
  }
}
