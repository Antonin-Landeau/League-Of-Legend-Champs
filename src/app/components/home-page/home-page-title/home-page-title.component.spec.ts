import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTitleComponent } from './home-page-title.component';

describe('HomePageTitleComponent', () => {
  let component: HomePageTitleComponent;
  let fixture: ComponentFixture<HomePageTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageTitleComponent]
    });
    fixture = TestBed.createComponent(HomePageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
