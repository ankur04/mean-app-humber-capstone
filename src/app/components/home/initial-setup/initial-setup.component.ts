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
  public initialSetup: Setup = new Setup();
  public error: string;

  constructor(
    public router: Router,
    public initialSetupService: InitialSetupService,
    public appService: AppService
  ) {
    const user = getUser();
    this.initialSetup.userId = user.user._id;
  }

  ngOnInit() {}

  submit() {
    this.initialSetupService.initialSetup(this.initialSetup).subscribe(
      () => this.router.navigate(["/home/journeys"]),
      (err) => {
        this.error = "Error: " + err.error;
      }
    );
  }

  back() {
    this.router.navigate(["/home"]);
  }
}
