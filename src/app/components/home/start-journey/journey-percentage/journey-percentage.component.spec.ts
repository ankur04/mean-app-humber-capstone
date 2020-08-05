import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyPercentageComponent } from './journey-percentage.component';

describe('JourneyPercentageComponent', () => {
  let component: JourneyPercentageComponent;
  let fixture: ComponentFixture<JourneyPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
