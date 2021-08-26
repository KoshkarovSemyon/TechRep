import { TestBed } from '@angular/core/testing';

import { FooterDataService } from './footer-data.service';

describe('FooterDataService', () => {
  let service: FooterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
