import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSliderComponent } from './student-slider.component';

describe('StudentSliderComponent', () => {
  let component: StudentSliderComponent;
  let fixture: ComponentFixture<StudentSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentSliderComponent]
    });
    fixture = TestBed.createComponent(StudentSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
