import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCertificateComponent } from './course-certificate.component';

describe('CourseCertificateComponent', () => {
  let component: CourseCertificateComponent;
  let fixture: ComponentFixture<CourseCertificateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCertificateComponent]
    });
    fixture = TestBed.createComponent(CourseCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
