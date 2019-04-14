import { TestBed } from '@angular/core/testing';

import { CommonProductService } from './common-product.service';

describe('CommonProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonProductService = TestBed.get(CommonProductService);
    expect(service).toBeTruthy();
  });
});
