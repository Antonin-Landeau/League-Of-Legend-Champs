import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyIconComponent } from './difficulty-icon.component';

describe('DifficultyIconComponent', () => {
  let component: DifficultyIconComponent;
  let fixture: ComponentFixture<DifficultyIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DifficultyIconComponent]
    });
    fixture = TestBed.createComponent(DifficultyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
