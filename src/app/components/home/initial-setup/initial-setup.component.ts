import { Component, OnInit } from "@angular/core";
import { Setup } from "src/app/model/Setup";
import { Router } from "@angular/router";
import { InitialSetupService } from "src/app/service/initialSetup/InitialSetup.service";
import { AppService } from "src/app/service/app.service";
import { getUser } from "src/app/helpers/storage.helper";

@Component({
  selector: "app-initial-setup",
  templateUrl: "./initial-setup.component.html",
  styleUrls: ["./initial-setup.component.css", "./../../../styles/form.css"],
})
export class InitialSetupComponent implements OnInit {
  private initialSetup: Setup = new Setup();
  private error: string;

  constructor(
    private router: Router,
    private initialSetupService: InitialSetupService,
    private appService: AppService
  ) {
    const user = getUser();
    this.initialSetup.userId = user.user._id;
  }

  ngOnInit() {}

  submit() {
    this.initialSetupService.initialSetup(this.initialSetup).subscribe(
      () => this.router.navigate(["/home/startJourney"]),
      (err) => {
        this.error = "Error: " + err.error;
      }
    );
  }

  back() {
    this.router.navigate(["/home"]);
  }
}
