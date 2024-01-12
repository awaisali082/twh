import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorFavoritecourseDetailsComponent } from './tutor-favoritecourse-details.component';

describe('TutorFavoritecourseDetailsComponent', () => {
  let component: TutorFavoritecourseDetailsComponent;
  let fixture: ComponentFixture<TutorFavoritecourseDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorFavoritecourseDetailsComponent]
    });
    fixture = TestBed.createComponent(TutorFavoritecourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
