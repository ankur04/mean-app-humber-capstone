import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sessionGetItem, sessionSetItem } from 'src/app/helpers/storage.helper';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css', './../../../../styles/form.css', './../step/step.component.css']
})
export class SkillComponent implements OnInit {

  @Input()
  stepNumber = 1;

  skillName;
  skillDesc;
  exercises;

  phaseno;
  phasename;

  skillData = { skill: { skill_desc: ":", exercises_data: { exercises: [] } }, phaseno: "", phasename: "" };

  constructor(private router: Router) { }

  ngOnInit() {
    if (history.state.skillData) {
      this.skillData = history.state.skillData
      sessionSetItem("skillData", this.skillData);
    } else {
      this.skillData = sessionGetItem("skillData");
    }
    this.exercises = this.skillData.skill.exercises_data.exercises;
    this.phaseno = this.skillData.phaseno
    this.phasename = this.skillData.phasename;
    this.setSkill(this.skillData.skill.skill_desc);
  }

  setSkill(skill_desc) {
    [this.skillName, this.skillDesc] = skill_desc.split(":");
  }

  visitExercise(exercise) {
    console.log(exercise)
    this.router.navigate(["/home/exercise"], {
      state: {
        "exerciseData": {
          "phaseno": this.phaseno,
          "phasename": this.phasename,
          "skillName": this.skillName,
          "exerciseName": exercise
        }
      }
    });
  }

}
