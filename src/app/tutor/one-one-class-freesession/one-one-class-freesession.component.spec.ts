import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOneClassFreesessionComponent } from './one-one-class-freesession.component';

describe('OneOneClassFreesessionComponent', () => {
  let component: OneOneClassFreesessionComponent;
  let fixture: ComponentFixture<OneOneClassFreesessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneOneClassFreesessionComponent]
    });
    fixture = TestBed.createComponent(OneOneClassFreesessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
