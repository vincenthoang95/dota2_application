import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';

import {PlayerStatsService} from './player-stats/player-stats.service';

import {HttpClientModule} from '@angular/common/http';
import { HeroImagePipe } from './player-stats/hero-image.pipe';

import { Routes, RouterModule } from '@angular/router';

import {Constants} from './config/constants';
import { SecToMinPipe } from './pipes/sec-to-min.pipe';
import { PlayerInfoComponent } from './match-detail/player-info/player-info.component';
import { HeroAbilityBuildComponent } from './match-detail/hero-ability-build/hero-ability-build.component';
import { SortAbilityLevelPipe } from './pipes/sort-ability-level.pipe'


import { TooltipModule, TooltipOptions  } from 'ng2-tooltip-directive';
import { MyDefaultTooltipOptions } from './config/MyDefaultTooltipOptions';
import { PlayerKillDeathComponent } from './match-detail/player-kill-death/player-kill-death.component';
import { SortPlayerItemPipe } from './pipes/sort-player-item.pipe';
import { ItemDescriptionComponent } from './match-detail/item-description/item-description.component';
import { AbilityDescriptionComponent } from './match-detail/ability-description/ability-description.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { ItemsComponent } from './items/items.component';

const appRoutes:Routes = [
  {path: '', redirectTo:'/player', pathMatch:'full'},
  {path: 'matches/:matchId', component:MatchDetailComponent},
  {path: 'player', component:PlayerStatsComponent},
  {path: 'heroes', component:HeroesComponent},
  // {path: 'heroes/:heroId', component:HeroesComponent},
  // {path: 'heroes/:heroId', component:HeroDetailComponent}
  {path: 'items', component:ItemsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PlayerStatsComponent,
    MatchDetailComponent,
    HeroImagePipe,
    SecToMinPipe,
    PlayerInfoComponent,
    HeroAbilityBuildComponent,
    SortAbilityLevelPipe,
    PlayerKillDeathComponent,
    SortPlayerItemPipe,
    ItemDescriptionComponent,
    AbilityDescriptionComponent,
    HeroesComponent,
    HeroDetailComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    TooltipModule.forRoot(MyDefaultTooltipOptions as TooltipOptions)
  ],
  providers: [PlayerStatsService, Constants],
  bootstrap: [AppComponent]
})
export class AppModule { }
