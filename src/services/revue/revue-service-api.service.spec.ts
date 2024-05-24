import { TestBed } from '@angular/core/testing';

import { RevueServiceApiService } from './revue-service-api.service';

describe('RevueServiceApiService', () => {
  let service: RevueServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevueServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
