import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent {

  @Input()
  title = "Step";

  @Input()
  stepNumber = 4;

  @Input()
  percentage = "30%";

  @Input()
  data = "";

  @Input()
  skill;

}
