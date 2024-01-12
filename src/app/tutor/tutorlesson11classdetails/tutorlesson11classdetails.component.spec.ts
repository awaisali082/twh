import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorlesson11classdetailsComponent } from './tutorlesson11classdetails.component';

describe('Tutorlesson11classdetailsComponent', () => {
  let component: Tutorlesson11classdetailsComponent;
  let fixture: ComponentFixture<Tutorlesson11classdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tutorlesson11classdetailsComponent]
    });
    fixture = TestBed.createComponent(Tutorlesson11classdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
