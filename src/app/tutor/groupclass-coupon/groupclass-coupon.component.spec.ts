import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupclassCouponComponent } from './groupclass-coupon.component';

describe('GroupclassCouponComponent', () => {
  let component: GroupclassCouponComponent;
  let fixture: ComponentFixture<GroupclassCouponComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupclassCouponComponent]
    });
    fixture = TestBed.createComponent(GroupclassCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
