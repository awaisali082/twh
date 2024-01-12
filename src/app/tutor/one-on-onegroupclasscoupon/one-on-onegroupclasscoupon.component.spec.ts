import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOnOnegroupclasscouponComponent } from './one-on-onegroupclasscoupon.component';

describe('OneOnOnegroupclasscouponComponent', () => {
  let component: OneOnOnegroupclasscouponComponent;
  let fixture: ComponentFixture<OneOnOnegroupclasscouponComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneOnOnegroupclasscouponComponent]
    });
    fixture = TestBed.createComponent(OneOnOnegroupclasscouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
