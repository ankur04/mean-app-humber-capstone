import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousExerciseComponent } from './previous-exercise.component';

describe('PreviousExerciseComponent', () => {
  let component: PreviousExerciseComponent;
  let fixture: ComponentFixture<PreviousExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
