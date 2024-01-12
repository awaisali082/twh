import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCourseTutorsideComponent } from './favorite-course-tutorside.component';

describe('FavoriteCourseTutorsideComponent', () => {
  let component: FavoriteCourseTutorsideComponent;
  let fixture: ComponentFixture<FavoriteCourseTutorsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteCourseTutorsideComponent]
    });
    fixture = TestBed.createComponent(FavoriteCourseTutorsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
