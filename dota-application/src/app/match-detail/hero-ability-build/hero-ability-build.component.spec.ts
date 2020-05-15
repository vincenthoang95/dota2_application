import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAbilityBuildComponent } from './hero-ability-build.component';

describe('HeroAbilityBuildComponent', () => {
  let component: HeroAbilityBuildComponent;
  let fixture: ComponentFixture<HeroAbilityBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroAbilityBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAbilityBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
