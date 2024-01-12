import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundrequestdetailTutorComponent } from './refundrequestdetail-tutor.component';

describe('RefundrequestdetailTutorComponent', () => {
  let component: RefundrequestdetailTutorComponent;
  let fixture: ComponentFixture<RefundrequestdetailTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefundrequestdetailTutorComponent]
    });
    fixture = TestBed.createComponent(RefundrequestdetailTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
