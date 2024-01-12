import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManagerLecturedetailsComponent } from './course-manager-lecturedetails.component';

describe('CourseManagerLecturedetailsComponent', () => {
  let component: CourseManagerLecturedetailsComponent;
  let fixture: ComponentFixture<CourseManagerLecturedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseManagerLecturedetailsComponent]
    });
    fixture = TestBed.createComponent(CourseManagerLecturedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
