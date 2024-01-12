import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutRequestAddaBankAccountTutorComponent } from './payout-request-adda-bank-account-tutor.component';

describe('PayoutRequestAddaBankAccountTutorComponent', () => {
  let component: PayoutRequestAddaBankAccountTutorComponent;
  let fixture: ComponentFixture<PayoutRequestAddaBankAccountTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayoutRequestAddaBankAccountTutorComponent]
    });
    fixture = TestBed.createComponent(PayoutRequestAddaBankAccountTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
