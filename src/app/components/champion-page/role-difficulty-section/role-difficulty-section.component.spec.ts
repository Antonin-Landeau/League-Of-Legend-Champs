import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDifficultySectionComponent } from './role-difficulty-section.component';

describe('RoleDifficultySectionComponent', () => {
  let component: RoleDifficultySectionComponent;
  let fixture: ComponentFixture<RoleDifficultySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleDifficultySectionComponent]
    });
    fixture = TestBed.createComponent(RoleDifficultySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
