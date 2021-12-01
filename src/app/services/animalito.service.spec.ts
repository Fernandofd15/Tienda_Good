import { TestBed } from '@angular/core/testing';

import { AnimalitoService } from './animalito.service';

describe('AnimalitoService', () => {
  let service: AnimalitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
