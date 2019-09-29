import { TestBed } from '@angular/core/testing';

import { JphCommentsClientService } from './jph-comments-client.service';

describe('JphCommentsClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JphCommentsClientService = TestBed.get(JphCommentsClientService);
    expect(service).toBeTruthy();
  });
});
