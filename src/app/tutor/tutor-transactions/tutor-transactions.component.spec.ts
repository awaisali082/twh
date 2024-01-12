import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorTransactionsComponent } from './tutor-transactions.component';

describe('TutorTransactionsComponent', () => {
  let component: TutorTransactionsComponent;
  let fixture: ComponentFixture<TutorTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorTransactionsComponent]
    });
    fixture = TestBed.createComponent(TutorTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
