import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOneClassScheduleComponent } from './one-one-class-schedule.component';

describe('OneOneClassScheduleComponent', () => {
  let component: OneOneClassScheduleComponent;
  let fixture: ComponentFixture<OneOneClassScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneOneClassScheduleComponent]
    });
    fixture = TestBed.createComponent(OneOneClassScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
