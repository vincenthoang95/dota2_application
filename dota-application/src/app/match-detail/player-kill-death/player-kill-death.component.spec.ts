import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerKillDeathComponent } from './player-kill-death.component';

describe('PlayerKillDeathComponent', () => {
  let component: PlayerKillDeathComponent;
  let fixture: ComponentFixture<PlayerKillDeathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerKillDeathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerKillDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
