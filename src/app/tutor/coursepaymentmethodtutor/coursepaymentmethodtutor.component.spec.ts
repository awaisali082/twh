import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursepaymentmethodtutorComponent } from './coursepaymentmethodtutor.component';

describe('CoursepaymentmethodtutorComponent', () => {
  let component: CoursepaymentmethodtutorComponent;
  let fixture: ComponentFixture<CoursepaymentmethodtutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursepaymentmethodtutorComponent]
    });
    fixture = TestBed.createComponent(CoursepaymentmethodtutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
