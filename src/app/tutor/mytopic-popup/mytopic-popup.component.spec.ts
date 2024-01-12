import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytopicPopupComponent } from './mytopic-popup.component';

describe('MytopicPopupComponent', () => {
  let component: MytopicPopupComponent;
  let fixture: ComponentFixture<MytopicPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MytopicPopupComponent]
    });
    fixture = TestBed.createComponent(MytopicPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
