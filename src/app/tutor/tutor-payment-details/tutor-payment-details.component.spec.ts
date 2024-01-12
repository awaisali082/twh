import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorPaymentDetailsComponent } from './tutor-payment-details.component';

describe('TutorPaymentDetailsComponent', () => {
  let component: TutorPaymentDetailsComponent;
  let fixture: ComponentFixture<TutorPaymentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorPaymentDetailsComponent]
    });
    fixture = TestBed.createComponent(TutorPaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
