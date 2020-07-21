import { Injectable } from '@angular/core';
import { JourneyService } from '../journey/journey.service';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  constructor(private journeyService: JourneyService,
    private appService: AppService,
    private router: Router) { }

  continue() {
    const template = this.journeyService.getTemplate(this.journeyService.journey, this.appService.templates);
    let phase = this.journeyService.getPhase(this.journeyService.journey, template.phases);
    let waypoint = this.journeyService.getWaypoint(this.journeyService.journey, phase.waypoints);
    let activity = this.journeyService.getActivity(this.journeyService.journey, waypoint.activities);
    let skill = this.journeyService.getSkill(this.journeyService.journey, activity.skills);
    const exerciseIndex = skill.exercises_data.exercises.findIndex(exercise => exercise.id == this.journeyService.journey.exercise.id);
    if (skill.exercises_data.exercises.length - 1 == exerciseIndex) {
      console.log("this is last")
      console.log(this.journeyService.journey)
      const nextStep = this.journeyService.getNextStep(this.journeyService.journey);
      console.log(nextStep)
      this.journeyService.updateJourney(nextStep);
      this.router.navigate(["/home/journey"], {
        state: {
          journeyId: nextStep.journeyId
        }
      });
    } else {
      const nextExerciseId = skill.exercises_data.exercises[exerciseIndex + 1].id
      this.journeyService.journey.exercise = {
        id: nextExerciseId,
        document: { show: false, download: false },
        canvas: { show: false, download: false },
        video: false,
      }
      this.journeyService.updateJourneyExercise(this.journeyService.journey.exercise);
      this.router.navigate(["/home/skill"], {
        state: {
          skillData: {
            skill: skill,
            phaseno: phase.no,
            phasename: phase.name
          }
        }
      });
    }
  }
}
