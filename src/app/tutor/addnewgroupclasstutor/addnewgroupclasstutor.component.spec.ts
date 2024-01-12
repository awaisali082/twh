import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewgroupclasstutorComponent } from './addnewgroupclasstutor.component';

describe('AddnewgroupclasstutorComponent', () => {
  let component: AddnewgroupclasstutorComponent;
  let fixture: ComponentFixture<AddnewgroupclasstutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewgroupclasstutorComponent]
    });
    fixture = TestBed.createComponent(AddnewgroupclasstutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
