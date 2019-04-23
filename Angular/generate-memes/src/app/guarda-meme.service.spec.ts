import { TestBed } from '@angular/core/testing';

import { GuardaMemeService } from './guarda-meme.service';

describe('GuardaMemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardaMemeService = TestBed.get(GuardaMemeService);
    expect(service).toBeTruthy();
  });
});
