import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTutorprofileComponent } from './edit-tutorprofile.component';

describe('EditTutorprofileComponent', () => {
  let component: EditTutorprofileComponent;
  let fixture: ComponentFixture<EditTutorprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTutorprofileComponent]
    });
    fixture = TestBed.createComponent(EditTutorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
