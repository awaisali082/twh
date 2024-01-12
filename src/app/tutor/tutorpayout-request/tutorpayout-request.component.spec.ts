import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorpayoutRequestComponent } from './tutorpayout-request.component';

describe('TutorpayoutRequestComponent', () => {
  let component: TutorpayoutRequestComponent;
  let fixture: ComponentFixture<TutorpayoutRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorpayoutRequestComponent]
    });
    fixture = TestBed.createComponent(TutorpayoutRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
