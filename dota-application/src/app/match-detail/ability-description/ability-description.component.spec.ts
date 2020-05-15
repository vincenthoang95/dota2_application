import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityDescriptionComponent } from './ability-description.component';

describe('AbilityDescriptionComponent', () => {
  let component: AbilityDescriptionComponent;
  let fixture: ComponentFixture<AbilityDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
