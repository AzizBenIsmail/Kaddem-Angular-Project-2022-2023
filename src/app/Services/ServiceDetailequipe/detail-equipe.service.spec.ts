import { TestBed } from '@angular/core/testing';

import { DetailEquipeService } from './detail-equipe.service';

describe('DetailEquipeService', () => {
  let service: DetailEquipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailEquipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
