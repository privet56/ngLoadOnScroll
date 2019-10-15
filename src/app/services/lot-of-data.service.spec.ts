import { TestBed } from '@angular/core/testing';

import { LotOfDataService } from './lot-of-data.service';

describe('LotOfDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LotOfDataService = TestBed.get(LotOfDataService);
    expect(service).toBeTruthy();
  });
});
