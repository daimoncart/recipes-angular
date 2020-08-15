import { TestBed } from '@angular/core/testing';

import { UomServiceService } from './uom.service';

describe('UomServiceService', () => {
  let service: UomServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UomServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
