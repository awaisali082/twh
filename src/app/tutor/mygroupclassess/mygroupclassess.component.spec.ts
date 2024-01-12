import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygroupclassessComponent } from './mygroupclassess.component';

describe('MygroupclassessComponent', () => {
  let component: MygroupclassessComponent;
  let fixture: ComponentFixture<MygroupclassessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MygroupclassessComponent]
    });
    fixture = TestBed.createComponent(MygroupclassessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
