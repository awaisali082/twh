import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManagerCourseGoalsComponent } from './course-manager-course-goals.component';

describe('CourseManagerCourseGoalsComponent', () => {
  let component: CourseManagerCourseGoalsComponent;
  let fixture: ComponentFixture<CourseManagerCourseGoalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseManagerCourseGoalsComponent]
    });
    fixture = TestBed.createComponent(CourseManagerCourseGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
