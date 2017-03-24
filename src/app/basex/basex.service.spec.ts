import { TestBed, inject } from '@angular/core/testing';

import { BasexService } from './basex.service';

describe('BasexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasexService]
    });
  });

  it('should ...', inject([BasexService], (service: BasexService) => {
    expect(service).toBeTruthy();
  }));
});
