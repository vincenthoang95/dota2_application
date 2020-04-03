import { TestBed } from '@angular/core/testing';

import { HeroAbilityBuildService } from './hero-ability-build.service';

describe('HeroAbilityBuildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroAbilityBuildService = TestBed.get(HeroAbilityBuildService);
    expect(service).toBeTruthy();
  });
});
