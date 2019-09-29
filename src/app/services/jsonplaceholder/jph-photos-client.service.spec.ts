import { TestBed } from '@angular/core/testing';

import { JphPhotosClientService } from './jph-photos-client.service';

describe('JphPhotosClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JphPhotosClientService = TestBed.get(JphPhotosClientService);
    expect(service).toBeTruthy();
  });
});
