import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutormylessongroupclassdetailComponent } from './tutormylessongroupclassdetail.component';

describe('TutormylessongroupclassdetailComponent', () => {
  let component: TutormylessongroupclassdetailComponent;
  let fixture: ComponentFixture<TutormylessongroupclassdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutormylessongroupclassdetailComponent]
    });
    fixture = TestBed.createComponent(TutormylessongroupclassdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
