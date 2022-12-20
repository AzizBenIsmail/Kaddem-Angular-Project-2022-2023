import { TestBed } from '@angular/core/testing';

import { UniversiteserviceService } from './universiteservice.service';

describe('UniversiteserviceService', () => {
  let service: UniversiteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversiteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
