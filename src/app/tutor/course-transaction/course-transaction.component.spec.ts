import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTransactionComponent } from './course-transaction.component';

describe('CourseTransactionComponent', () => {
  let component: CourseTransactionComponent;
  let fixture: ComponentFixture<CourseTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseTransactionComponent]
    });
    fixture = TestBed.createComponent(CourseTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
