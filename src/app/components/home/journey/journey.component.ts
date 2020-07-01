import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css', './../../../styles/form.css']
})
export class JourneyComponent implements OnInit {

  stepData = "This step focuses on prototyping your first product. It has one key skill, and two canvasses."
  nextData = "This step focuses on designing the product to meet the key needs of your users. It has one key skill, and two canvasses."

  constructor() { }

  ngOnInit() {
  }

}
