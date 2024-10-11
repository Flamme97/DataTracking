import { TestBed } from '@angular/core/testing';

import { SalesinfoService } from './salesinfo.service';

describe('SalesinfoService', () => {
  let service: SalesinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
