import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundrequestTutorComponent } from './refundrequest-tutor.component';

describe('RefundrequestTutorComponent', () => {
  let component: RefundrequestTutorComponent;
  let fixture: ComponentFixture<RefundrequestTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefundrequestTutorComponent]
    });
    fixture = TestBed.createComponent(RefundrequestTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
