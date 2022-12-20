import { TestBed } from '@angular/core/testing';

import { DepartementserviceService } from './departementservice.service';

describe('DepartementserviceService', () => {
  let service: DepartementserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartementserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
