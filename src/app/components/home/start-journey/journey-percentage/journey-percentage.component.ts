import { Component, Input, OnInit } from '@angular/core';
import { JourneyService } from 'src/app/service/journey/journey.service';

@Component({
  selector: 'app-journey-percentage',
  templateUrl: './journey-percentage.component.html',
  styleUrls: ['./journey-percentage.component.css']
})
export class JourneyPercentageComponent implements OnInit {

  journeyPercentage = "Loading..."

  @Input()
  journeyId;

  constructor(private journeyService: JourneyService) { }

  ngOnInit() {
    this.journeyService.getJourneyPercentage(this.journeyId)
      .subscribe((data: any) => this.journeyPercentage = data.journeyPercentage);
  }

}
