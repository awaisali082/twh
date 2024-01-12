import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCourseCertificateComponent } from './s-course-certificate.component';

describe('SCourseCertificateComponent', () => {
  let component: SCourseCertificateComponent;
  let fixture: ComponentFixture<SCourseCertificateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SCourseCertificateComponent]
    });
    fixture = TestBed.createComponent(SCourseCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
