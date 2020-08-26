import { Component } from '@angular/core';
import {PlayerStatsService} from './player-stats/player-stats.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private playerStatsService: PlayerStatsService,
    private route: ActivatedRoute,
    private router: Router
    ){}


  title = 'dota-application';
  

  checkLogin(){
    // sessionStorage.setItem("name","askdjklfdjs")
    if (localStorage.getItem("name")){
      return true;
    }
  }


}
