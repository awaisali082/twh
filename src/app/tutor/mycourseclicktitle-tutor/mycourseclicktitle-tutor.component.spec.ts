import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycourseclicktitleTutorComponent } from './mycourseclicktitle-tutor.component';

describe('MycourseclicktitleTutorComponent', () => {
  let component: MycourseclicktitleTutorComponent;
  let fixture: ComponentFixture<MycourseclicktitleTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycourseclicktitleTutorComponent]
    });
    fixture = TestBed.createComponent(MycourseclicktitleTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
