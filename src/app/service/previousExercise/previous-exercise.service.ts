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
  ) {}
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
    console.log(
      "exercise ID ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    );
    console.log(exerciseIndex);
    console.log(skill.exercises_data.exercises.length - 1);
    // if (skill.exercises_data.exercises.length - 1 == exerciseIndex) {
    //   const nextStep = this.journeyService.getNextStep(
    //     this.journeyService.journey
    //   );
    //   this.router.navigate(["/home/previousPhase"], {
    //     state: {
    //       journeyId: nextStep.journeyId,
    //       oldPhaseId: phase.id,
    //       oldWayPointId: waypoint.id,
    //     },
    //   });
    // } else {
    //const nextExerciseId = skill.exercises_data.exercises[exerciseIndex + 1].id;
    //this.journeyService.journey.exercise = {
    //   id: nextExerciseId,
    //   document: { show: false, download: false },
    //   canvas: { show: false, download: false },
    //   video: false,
    // };
    //sessionSetItem("exerciseData", this.journeyService.journey.exercise);
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
