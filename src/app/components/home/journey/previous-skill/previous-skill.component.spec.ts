import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousSkillComponent } from './previous-skill.component';

describe('PreviousSkillComponent', () => {
  let component: PreviousSkillComponent;
  let fixture: ComponentFixture<PreviousSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
