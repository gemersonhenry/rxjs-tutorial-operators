import { TestBed } from '@angular/core/testing';

import { JphPhotosImplementService } from './jph-photos-implement.service';

describe('JphPhotosImplementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JphPhotosImplementService = TestBed.get(JphPhotosImplementService);
    expect(service).toBeTruthy();
  });
});
