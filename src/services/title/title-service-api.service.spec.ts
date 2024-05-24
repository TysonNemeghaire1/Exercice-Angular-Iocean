import { TestBed } from '@angular/core/testing';

import { TitleServiceApiService } from './title-service-api.service';

describe('TitleServiceApiService', () => {
  let service: TitleServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
