import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycoursestutorComponent } from './mycoursestutor.component';

describe('MycoursestutorComponent', () => {
  let component: MycoursestutorComponent;
  let fixture: ComponentFixture<MycoursestutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycoursestutorComponent]
    });
    fixture = TestBed.createComponent(MycoursestutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
