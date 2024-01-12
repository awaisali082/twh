import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutrequestCreateAccountComponent } from './payoutrequest-create-account.component';

describe('PayoutrequestCreateAccountComponent', () => {
  let component: PayoutrequestCreateAccountComponent;
  let fixture: ComponentFixture<PayoutrequestCreateAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayoutrequestCreateAccountComponent]
    });
    fixture = TestBed.createComponent(PayoutrequestCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
