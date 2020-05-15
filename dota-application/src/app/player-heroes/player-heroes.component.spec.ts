import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHeroesComponent } from './player-heroes.component';

describe('PlayerHeroesComponent', () => {
  let component: PlayerHeroesComponent;
  let fixture: ComponentFixture<PlayerHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
