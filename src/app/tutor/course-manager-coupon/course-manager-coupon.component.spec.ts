import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManagerCouponComponent } from './course-manager-coupon.component';

describe('CourseManagerCouponComponent', () => {
  let component: CourseManagerCouponComponent;
  let fixture: ComponentFixture<CourseManagerCouponComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseManagerCouponComponent]
    });
    fixture = TestBed.createComponent(CourseManagerCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
