import { TestBed } from '@angular/core/testing';

import { ApiCommonServiceService } from './api-common-service.service';

describe('ApiCommonServiceService', () => {
  let service: ApiCommonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCommonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
