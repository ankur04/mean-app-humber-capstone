import { Component, Input, OnInit } from '@angular/core';
import { sessionGetItem, sessionSetItem } from 'src/app/helpers/storage.helper';

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

  constructor() { }

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
    this.exerciseName = this.exerciseData.exerciseName;
  }

}
