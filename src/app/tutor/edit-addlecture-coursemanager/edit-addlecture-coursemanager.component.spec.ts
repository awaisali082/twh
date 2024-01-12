import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddlectureCoursemanagerComponent } from './edit-addlecture-coursemanager.component';

describe('EditAddlectureCoursemanagerComponent', () => {
  let component: EditAddlectureCoursemanagerComponent;
  let fixture: ComponentFixture<EditAddlectureCoursemanagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAddlectureCoursemanagerComponent]
    });
    fixture = TestBed.createComponent(EditAddlectureCoursemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
