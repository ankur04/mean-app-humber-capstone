import { TestBed } from '@angular/core/testing';

import { PreviousExerciseService } from './previous-exercise.service';

describe('PreviousExerciseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreviousExerciseService = TestBed.get(PreviousExerciseService);
    expect(service).toBeTruthy();
  });
});
