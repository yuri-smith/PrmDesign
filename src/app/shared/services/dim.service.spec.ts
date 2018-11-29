import { TestBed, inject } from '@angular/core/testing';

import { DimService } from './dim.service';

describe('DimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DimService]
    });
  });

  it('should be created', inject([DimService], (service: DimService) => {
    expect(service).toBeTruthy();
  }));
});
