import { TestBed } from '@angular/core/testing';

import { BaseUrlServiceService } from './base-url-service.service';

describe('BaseUrlServiceService', () => {
  let service: BaseUrlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseUrlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
