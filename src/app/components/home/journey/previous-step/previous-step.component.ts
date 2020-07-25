import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-previous-step",
  templateUrl: "./previous-step.component.html",
  styleUrls: ["./previous-step.component.css"],
})
export class PreviousStepComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

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

  @Input()
  phaseno;

  @Input()
  phasename;
}
