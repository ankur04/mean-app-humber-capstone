import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { sessionGetItem, sessionSetItem } from "src/app/helpers/storage.helper";
import { JourneyService } from "src/app/service/journey/journey.service";

@Component({
  selector: "app-previous-skill",
  templateUrl: "./previous-skill.component.html",
  styleUrls: [
    "./previous-skill.component.css",
    "./../../../../styles/form.css",
    "./../step/step.component.css",
  ],
})
export class PreviousSkillComponent implements OnInit {
  stepNumber;

  skillIndex = 0;

  skillName;
  skillDesc;
  exercises;

  phaseno;
  phasename;

  skillData = {
    skill: { skill_desc: ":", exercises_data: { exercises: [] } },
    phaseno: "",
    phasename: "",
    stepNumber: 1,
  };
  constructor(private router: Router, private journeyService: JourneyService) {}

  ngOnInit() {
    if (history.state.skillData) {
      this.skillData = history.state.skillData;
      sessionSetItem("skillData", this.skillData);
    } else {
      this.skillData = sessionGetItem("skillData");
    }
    this.stepNumber = this.skillData.stepNumber;
    this.exercises = this.skillData.skill.exercises_data.exercises;
    this.phaseno = this.skillData.phaseno;
    this.phasename = this.skillData.phasename;
    this.setSkill(this.skillData.skill.skill_desc);
  }

  setSkill(skill_desc) {
    [this.skillName, this.skillDesc] = skill_desc.split(":");
    this.skillIndex = this.exercises.findIndex(
      (exercise) => exercise.id == this.journeyService.journey.exercise.id
    );
  }

  visitExercise(exercise, i) {
    this.router.navigate(["/home/previousExercise"], {
      state: {
        exerciseData: {
          phaseno: this.phaseno,
          phasename: this.phasename,
          skillName: this.skillName,
          exercise: exercise,
          completed: true,
        },
      },
    });
  }
}
