import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlectureCourseManagerComponent } from './addlecture-course-manager.component';

describe('AddlectureCourseManagerComponent', () => {
  let component: AddlectureCourseManagerComponent;
  let fixture: ComponentFixture<AddlectureCourseManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddlectureCourseManagerComponent]
    });
    fixture = TestBed.createComponent(AddlectureCourseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
