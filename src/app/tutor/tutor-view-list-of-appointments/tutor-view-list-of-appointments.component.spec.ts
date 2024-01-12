import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorViewListOfAppointmentsComponent } from './tutor-view-list-of-appointments.component';

describe('TutorViewListOfAppointmentsComponent', () => {
  let component: TutorViewListOfAppointmentsComponent;
  let fixture: ComponentFixture<TutorViewListOfAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorViewListOfAppointmentsComponent]
    });
    fixture = TestBed.createComponent(TutorViewListOfAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
