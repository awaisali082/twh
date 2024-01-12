import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycourseclickeyeactionTutorComponent } from './mycourseclickeyeaction-tutor.component';

describe('MycourseclickeyeactionTutorComponent', () => {
  let component: MycourseclickeyeactionTutorComponent;
  let fixture: ComponentFixture<MycourseclickeyeactionTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycourseclickeyeactionTutorComponent]
    });
    fixture = TestBed.createComponent(MycourseclickeyeactionTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
