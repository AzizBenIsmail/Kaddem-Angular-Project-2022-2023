import { TestBed } from '@angular/core/testing';

import { ReclaimService } from './reclaim.service';

describe('ReclaimService', () => {
  let service: ReclaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
