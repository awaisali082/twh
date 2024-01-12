import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorCategoryComponent } from './tutor-category.component';

describe('TutorCategoryComponent', () => {
  let component: TutorCategoryComponent;
  let fixture: ComponentFixture<TutorCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorCategoryComponent]
    });
    fixture = TestBed.createComponent(TutorCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
