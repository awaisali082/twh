import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsectionCourseManagerComponent } from './addsection-course-manager.component';

describe('AddsectionCourseManagerComponent', () => {
  let component: AddsectionCourseManagerComponent;
  let fixture: ComponentFixture<AddsectionCourseManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsectionCourseManagerComponent]
    });
    fixture = TestBed.createComponent(AddsectionCourseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
