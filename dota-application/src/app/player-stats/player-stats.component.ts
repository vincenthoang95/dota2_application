import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {PlayerStatsService} from './player-stats.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {

  constructor(
    private playerStatsService: PlayerStatsService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit() {
    // this.playerStatsService.getRecentMatches().subscribe(
    //   data=>this.recentMatches = data,
    //   error=>console.log(error)
    // )

    
  }
  // @Input()
  // recentMatches

  // uncomment for static
  @Input()
  recentMatches = JSON.parse(this.playerStatsService.getRecentMatches());

  showRecentMatches = true;
  showMatchDetail = false;
  matchId;

  heroInfo = JSON.parse(this.playerStatsService.getHeroInfo());

  check(){
    this.recentMatches.forEach(matches => {
    });
  }

  // gets hero image name (ex. [hero name]_full.png)
  getHeroImage(heroId){
    var img;
    this.heroInfo.forEach(hero => {
      if(hero.id == heroId){
        //console.log(hero.heroImage);
        img = hero.heroImage;
      }
    })
    return img;
  }

  // gets hero name
  getHeroName(heroId){
    var heroName;
    this.heroInfo.forEach(hero =>{
      if(hero.id == heroId){
        heroName = hero.name;
      }
    })
    return heroName;
  }

  // gets result (win or lost)
  // player_slot <= 127 (radiant)
  // player_slot > 127 (dire)
  getResult(match):String{
    if(match.player_slot <= 127 && match.radiant_win == false){
      return 'Lost';
    }
    else if(match.player_slot <= 127 && match.radiant_win == true){
      return 'Won';
    }
    else if(match.player_slot > 127 && match.radiant_win == true){
      return 'Lost';
    }
    else if(match.player_slot > 127 && match.radiant_win == false){
      return 'Won';
    }
    
  }
  
  // routes to match detail page
  toggleToMatch(matchId){
    this.router.navigate(['/matches',matchId]);
  }


}
