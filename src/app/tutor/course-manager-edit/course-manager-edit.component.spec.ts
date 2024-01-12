import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManagerEditComponent } from './course-manager-edit.component';

describe('CourseManagerEditComponent', () => {
  let component: CourseManagerEditComponent;
  let fixture: ComponentFixture<CourseManagerEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseManagerEditComponent]
    });
    fixture = TestBed.createComponent(CourseManagerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
