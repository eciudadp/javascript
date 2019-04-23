import { TestBed } from '@angular/core/testing';

import { MensajesConsolaService } from './mensajes-consola.service';

describe('MensajesConsolaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MensajesConsolaService = TestBed.get(MensajesConsolaService);
    expect(service).toBeTruthy();
  });
});
