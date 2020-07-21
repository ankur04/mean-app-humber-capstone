import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { sessionGetItem, sessionSetItem } from 'src/app/helpers/storage.helper';
import { ExerciseService } from 'src/app/service/exercise/exercise.service';
import { JourneyService } from 'src/app/service/journey/journey.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css', './../../../../styles/form.css']
})
export class ExerciseComponent implements OnInit {

  phaseno;
  phasename;

  skillName;
  exerciseName;

  exerciseData;

  isContinueDisabled = true;

  exercise;
  completed: boolean;

  constructor(private journeyService: JourneyService, private exerciseService: ExerciseService) { }

  ngOnInit() {
    if (history.state.exerciseData) {
      this.exerciseData = history.state.exerciseData
      sessionSetItem("exerciseData", this.exerciseData);
    } else {
      this.exerciseData = sessionGetItem("exerciseData");
    }
    this.phaseno = this.exerciseData.phaseno;
    this.phasename = this.exerciseData.phasename;
    this.skillName = this.exerciseData.skillName;
    this.completed = this.exerciseData.completed;
    this.exerciseName = this.exerciseData.exercise.name;
    this.exercise = this.journeyService.journey.exercise
    this.updateContinue();
  }

  show(type) {
    window.open("/assets/" + type + "/" + this.exerciseData.exercise.document, '_blank');
    if (!this.completed) {
      this.exercise[type].show = true;
      this.updateContinue();
      this.journeyService.updateJourneyExercise(this.exercise);
      sessionSetItem("exerciseData", this.exerciseData);
    }
  }

  showVideo() {
    if (!this.completed) {
      this.exercise.video = true;
      this.updateContinue();
      this.journeyService.updateJourneyExercise(this.exercise);
      sessionSetItem("exerciseData", this.exerciseData);
    }
  }

  download(type) {
    let link = document.createElement("a");
    link.download = this.exerciseData.exercise.document;
    link.href = "assets/" + type + "/" + this.exerciseData.exercise.document;
    link.click();
    link.remove();
    if (!this.completed) {
      this.exercise[type].download = true;
      this.updateContinue();
      this.journeyService.updateJourneyExercise(this.exercise);
      sessionSetItem("exerciseData", this.exerciseData);
    }
  }

  updateContinue() {
    this.isContinueDisabled = !(this.exercise.video
      && (this.exercise.document.show || this.exercise.document.download)
      && (this.exercise.canvas.show || this.exercise.canvas.download))
  }

  continue() {
    this.exerciseService.continue();
  }

}
