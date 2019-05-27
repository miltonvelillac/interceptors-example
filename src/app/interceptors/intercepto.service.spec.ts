import { TestBed } from '@angular/core/testing';

import { InterceptoService } from './intercepto.service';

describe('InterceptoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptoService = TestBed.get(InterceptoService);
    expect(service).toBeTruthy();
  });
});
