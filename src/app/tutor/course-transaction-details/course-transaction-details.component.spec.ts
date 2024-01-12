import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTransactionDetailsComponent } from './course-transaction-details.component';

describe('CourseTransactionDetailsComponent', () => {
  let component: CourseTransactionDetailsComponent;
  let fixture: ComponentFixture<CourseTransactionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseTransactionDetailsComponent]
    });
    fixture = TestBed.createComponent(CourseTransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
