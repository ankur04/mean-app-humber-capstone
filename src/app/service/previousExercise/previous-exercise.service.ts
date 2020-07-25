import { Injectable } from "@angular/core";
import { JourneyService } from "../journey/journey.service";
import { AppService } from "../app.service";
import { Router } from "@angular/router";
import { sessionSetItem, sessionGetItem } from "src/app/helpers/storage.helper";

@Injectable({
  providedIn: "root",
})
export class PreviousExerciseService {
  constructor(
    private journeyService: JourneyService,
    private appService: AppService,
    private router: Router
  ) { }
  continue() {
    const template = this.journeyService.getTemplate(
      this.journeyService.journey,
      this.appService.templates
    );
    let phase = this.journeyService.getPhase(
      this.journeyService.journey,
      template.phases
    );
    let waypoint = this.journeyService.getWaypoint(
      this.journeyService.journey,
      phase.waypoints
    );
    let activity = this.journeyService.getActivity(
      this.journeyService.journey,
      waypoint.activities
    );
    let skill = this.journeyService.getSkill(
      this.journeyService.journey,
      activity.skills
    );
    const exerciseIndex = skill.exercises_data.exercises.findIndex(
      (exercise) => exercise.id == this.journeyService.journey.exercise.id
    );
    this.router.navigate(["/home/previousSkill"], {
      state: {
        skillData: {
          stepNumber: sessionGetItem("skillData").stepNumber,
          skill: skill,
          phaseno: phase.no,
          phasename: phase.name,
        },
      },
    });
    //}
  }
}
