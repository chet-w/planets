import { TestBed } from '@angular/core/testing';

import { PlanetEngineService } from './planet-engine.service';

describe('PlanetEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanetEngineService = TestBed.get(PlanetEngineService);
    expect(service).toBeTruthy();
  });
});
