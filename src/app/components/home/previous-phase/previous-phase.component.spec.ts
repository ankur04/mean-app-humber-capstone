import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousPhaseComponent } from './previous-phase.component';

describe('PreviousPhaseComponent', () => {
  let component: PreviousPhaseComponent;
  let fixture: ComponentFixture<PreviousPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
