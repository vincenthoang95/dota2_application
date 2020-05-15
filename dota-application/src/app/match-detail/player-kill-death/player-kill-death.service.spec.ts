import { TestBed } from '@angular/core/testing';

import { PlayerKillDeathService } from './player-kill-death.service';

describe('PlayerKillDeathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerKillDeathService = TestBed.get(PlayerKillDeathService);
    expect(service).toBeTruthy();
  });
});
