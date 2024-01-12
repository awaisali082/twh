import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentgroupclasslessonDetailsComponent } from './studentgroupclasslesson-details.component';

describe('StudentgroupclasslessonDetailsComponent', () => {
  let component: StudentgroupclasslessonDetailsComponent;
  let fixture: ComponentFixture<StudentgroupclasslessonDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentgroupclasslessonDetailsComponent]
    });
    fixture = TestBed.createComponent(StudentgroupclasslessonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
