import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycategorytopicpopupComponent } from './mycategorytopicpopup.component';

describe('MycategorytopicpopupComponent', () => {
  let component: MycategorytopicpopupComponent;
  let fixture: ComponentFixture<MycategorytopicpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycategorytopicpopupComponent]
    });
    fixture = TestBed.createComponent(MycategorytopicpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
