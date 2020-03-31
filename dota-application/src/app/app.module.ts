import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';

import {PlayerStatsService} from './player-stats/player-stats.service';

import {HttpClientModule} from '@angular/common/http';
import { HeroImagePipe } from './player-stats/hero-image.pipe';

import { Routes, RouterModule } from '@angular/router';

import {Constants} from './config/constants'

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
    HeroImagePipe
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
