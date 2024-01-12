import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorMessageComponent } from './tutor-message.component';

describe('TutorMessageComponent', () => {
  let component: TutorMessageComponent;
  let fixture: ComponentFixture<TutorMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorMessageComponent]
    });
    fixture = TestBed.createComponent(TutorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
