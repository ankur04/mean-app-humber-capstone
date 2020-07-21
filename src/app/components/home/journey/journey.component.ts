import { Component, OnInit } from "@angular/core";
import { JourneyService } from "src/app/service/journey/journey.service";
import { sessionGetItem } from "src/app/helpers/storage.helper";
import { Router } from "@angular/router";

@Component({
  selector: "app-journey",
  templateUrl: "./journey.component.html",
  styleUrls: ["./journey.component.css", "./../../../styles/form.css"],
})
export class JourneyComponent implements OnInit {
  phase;
  waypoint;
  activity;
  skill;
  percentage;
  journeyId;

  nextPhase;
  nextWaypoint;
  nextActivity;
  nextSkill;
  nextPercentage;

  stepData =
    "This step focuses on prototyping your first product. It has one key skill, and two canvasses.";
  nextData =
    "This step focuses on designing the product to meet the key needs of your users. It has one key skill, and two canvasses.";
  exercise: any;

  constructor(private journeyService: JourneyService, public router: Router) {}

  ngOnInit() {
    let journeyId = history.state.journeyId;
    this.journeyId = history.state.journeyId;
    if (!journeyId) {
      journeyId = sessionGetItem("journeyId");
      this.journeyId = sessionGetItem("journeyId");
    }
    console.log("DON'T REMOVE\nJourney ID : " + journeyId);
    this.journeyService.getProgress(journeyId).subscribe((data) => {
      this.phase = data.phase;
      this.waypoint = data.waypoint;
      this.activity = data.activity;
      this.skill = data.skill;
      this.percentage = data.percentage;

      this.nextPhase = data.nextPhase;
      this.nextWaypoint = data.nextWaypoint;
      this.nextActivity = data.nextActivity;
      this.nextSkill = data.nextSkill;
      this.nextPercentage = data.nextPercentage;
    });
  }

  oldPhase(phaseId) {
    this.router.navigate(["/home/previousPhase"], {
      state: {
        oldPhaseId: phaseId,
        journeyId: this.journeyId,
        oldWayPointId: this.waypoint.id,
      },
    });
  }
}
