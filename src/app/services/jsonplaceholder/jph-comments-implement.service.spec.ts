import { TestBed } from '@angular/core/testing';

import { JphCommentsImplementService } from './jph-comments-implement.service';

describe('JphCommentsImplementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JphCommentsImplementService = TestBed.get(JphCommentsImplementService);
    expect(service).toBeTruthy();
  });
});
