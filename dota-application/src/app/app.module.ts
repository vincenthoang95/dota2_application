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

const appRoutes:Routes = [
  {path: '', redirectTo:'/player', pathMatch:'full'},
  {path: 'matches/:matchId', component:MatchDetailComponent},
  {path: 'player', component:PlayerStatsComponent}
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
    SortAbilityLevelPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlayerStatsService, Constants],
  bootstrap: [AppComponent]
})
export class AppModule { }
