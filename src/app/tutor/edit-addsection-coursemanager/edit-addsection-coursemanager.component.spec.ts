import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddsectionCoursemanagerComponent } from './edit-addsection-coursemanager.component';

describe('EditAddsectionCoursemanagerComponent', () => {
  let component: EditAddsectionCoursemanagerComponent;
  let fixture: ComponentFixture<EditAddsectionCoursemanagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAddsectionCoursemanagerComponent]
    });
    fixture = TestBed.createComponent(EditAddsectionCoursemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
