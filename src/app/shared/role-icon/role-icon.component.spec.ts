import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleIconComponent } from './role-icon.component';

describe('RoleIconComponent', () => {
  let component: RoleIconComponent;
  let fixture: ComponentFixture<RoleIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleIconComponent]
    });
    fixture = TestBed.createComponent(RoleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
