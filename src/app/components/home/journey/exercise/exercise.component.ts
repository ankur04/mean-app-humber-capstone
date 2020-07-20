import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css', './../../../../styles/form.css']
})
export class ExerciseComponent implements OnInit {

  @Input()
  skill;

  @Input()
  exercise;

  constructor() { }

  ngOnInit() {
  }

}
