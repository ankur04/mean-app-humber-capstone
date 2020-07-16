import { Component, Input, OnInit } from '@angular/core';
import { sessionSetItem, sessionGetItem } from 'src/app/helpers/storage.helper';

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

  constructor() { }

  ngOnInit() {
    let skill = { skill_desc: ":", exercises_data: { exercises: [] } };
    if (history.state.skill) {
      skill = history.state.skill
      sessionSetItem("skill", skill);
    } else {
      skill = sessionGetItem("skill");
    }
    this.exercises = skill.exercises_data.exercises;
    this.setSkill(skill.skill_desc);
  }

  setSkill(skill_desc) {
    [this.skillName, this.skillDesc] = skill_desc.split(":");
  }

}
