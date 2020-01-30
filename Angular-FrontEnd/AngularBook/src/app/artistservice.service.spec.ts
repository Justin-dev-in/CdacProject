import { TestBed } from '@angular/core/testing';

import { ArtistserviceService } from './artistservice.service';

describe('ArtistserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistserviceService = TestBed.get(ArtistserviceService);
    expect(service).toBeTruthy();
  });
});
