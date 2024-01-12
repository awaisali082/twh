import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorgroupclassComponent } from './tutorgroupclass.component';

describe('TutorgroupclassComponent', () => {
  let component: TutorgroupclassComponent;
  let fixture: ComponentFixture<TutorgroupclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorgroupclassComponent]
    });
    fixture = TestBed.createComponent(TutorgroupclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
