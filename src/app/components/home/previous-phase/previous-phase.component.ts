import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/service/app.service";
import { template } from "@angular/core/src/render3";
import { Router } from "@angular/router";

@Component({
  selector: "app-previous-phase",
  templateUrl: "./previous-phase.component.html",
  styleUrls: ["./previous-phase.component.css", "./../../../styles/form.css"],
})
export class PreviousPhaseComponent implements OnInit {
  phase;
  waypoint;
  activity;
  skill;
  percentage;
  journeyId;
  templates;
  oldPhaseId;
  oldWayPointId;
  currentCompletedPhase;
  currentCompletedWaypoint;
  disabled;
  disableNextButton;

  constructor(private appService: AppService, public router: Router) {
    this.templates = appService.templates as any[];
  }

  ngOnInit() {
    this.oldPhaseId = history.state.oldPhaseId;
    this.currentCompletedPhase = history.state.oldPhaseId;
    this.disabled = "1";
    this.oldWayPointId = history.state.oldWayPointId;
    this.currentCompletedWaypoint = history.state.oldWayPointId;
    this.disableNextButton = false;
    this.getPhase();
  }

  oldPhase() {
    this.disableNextButton = false;
    this.getPhase();
  }

  getPhase() {
    for (const template of this.templates) {
      let index = 0;
      for (let i = 0; i < template.phases.length; i++) {
        let currPhase = template.phases[i];
        for (let j = 0; j < currPhase.waypoints.length; j++) {
          let currWaypoint = currPhase.waypoints[j];
          if (currWaypoint.id == this.oldWayPointId) {
            this.waypoint = currPhase.waypoints[j - 1];
            if (this.waypoint === undefined) {

              this.phase = template.phases[i - 1];
              this.waypoint = this.phase.waypoints[
                this.phase.waypoints.length - 1
              ];
              if (this.phase === undefined) {
                this.phase = template.phases[0];
              }
            } else {
            }
            this.phase = template.phases[i];
            this.oldWayPointId = this.waypoint.id;
            this.activity = this.waypoint.activities[0];
            this.skill = this.activity.skills[0];
            this.percentage = "100%";
            if (
              this.phase &&
              this.phase.no === "I" &&
              this.waypoint &&
              this.waypoint.step_no === "1"
            ) {
              this.disabled = "0";
            }
          }
        }
      }
    }
  }

  nextPhase() {
    this.disabled = "1";
    let front = false;
    for (const template of this.templates) {
      let index = 0;
      for (let i = 0; i < template.phases.length; i++) {
        let currPhase = template.phases[i];
        for (let j = 0; j < currPhase.waypoints.length; j++) {
          let currWaypoint = currPhase.waypoints[j];
          if (currWaypoint.id == this.oldWayPointId) {
            let way = currPhase.waypoints[j + 1];
            if (way === undefined) {
              this.phase = template.phases[i + 1];
              front = true;
              this.waypoint = this.phase.waypoints[0];
              this.activity = this.waypoint.activities[0];
              this.skill = this.activity.skills[0];
              this.oldWayPointId = this.waypoint.id;
            } else {
              this.waypoint = currPhase.waypoints[j + 1];
              this.activity = way.activities[0];
              this.skill = this.activity.skills[0];
              this.oldWayPointId = this.waypoint.id;
            }
            break;
          }
        }
        if (
          this.oldPhaseId === this.currentCompletedPhase &&
          this.oldWayPointId === this.currentCompletedWaypoint
        ) {
          this.disableNextButton = true;
        }
        if (front) {
          break;
        }
      }
    }

    if (this.disableNextButton) {
      this.router.navigate(["/home/journey"], {
        state: { journeyId: history.state.journeyId },
      });
    }
  }
}
