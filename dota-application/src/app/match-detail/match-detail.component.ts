import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {MatchDetailService} from './match-detail.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  matchId;
  direScore;
  radiantScore;
  radiantWin;
  startTime;
  duration;
  picksBans;
  players;

  heroStats;

  itemIds;
  itemList;

  picks;
  bans;

  radiantPlayers;
  direPlayers;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matchDetailService:MatchDetailService
    ) { }

  ngOnInit() {
    // gets the matchId in the url
    this.route.paramMap.subscribe((params: ParamMap) =>{
        this.matchId = params.get('matchId')
      }
    );

    // gets match detail based on the matchId
    this.matchDetailService.getMatchInfo(this.matchId).subscribe(
      data => 
      {
        this.matchId = data["match_id"];
        this.direScore = data["dire_score"];
        this.radiantScore = data["radiant_score"];
        this.radiantWin = data["radiant_win"];
        this.startTime = data["start_time"];
        this.duration = data["duration"];
        
        this.picksBans = data["picks_bans"];
        this.picks = data["picks_bans"].slice(0,10);
        this.bans = data["picks_bans"].slice(10,);

        this.players = data["players"];
        this.radiantPlayers = data["players"].slice(0,5);
        this.direPlayers = data["players"].slice(5,10);
      },
      error=> console.log(error.status)
    )

    this.matchDetailService.getHeroStats().subscribe(
      data=>this.heroStats = data,
      error=>console.log(error)
    );


    this.matchDetailService.getItemInfo().subscribe(
      data=>
      {
        this.itemIds = data["itemIds"];
        this.itemList = data["itemList"];
      },
      error=>console.log(error)
    )

    this.loadMatchDeatils();
    
    
  }
  
  
  loadMatchDeatils(){

  }

  // gets heroes image path
  getHeroImage(heroId){

    var img:string = this.heroStats[heroId].img;
    var imgName = img.split("/").pop().slice(0,-1);
    return imgName;
  }
  
  // gets image name
  getItemImage(itemId){
    if(itemId == 0){
      return null;
    }
    var itemName = this.itemIds[itemId];
    var img = this.itemList[itemName]["img"].split("/").pop().slice(0,-16);
    // console.log(img.replace("\\?t*=*[0-9]*",""));
    return "assets/dota_item_image/" + img;
  }

  // returns if the player is hidden (Anonymous) or not  
  playerExists(playerName){
    if(playerName == null){
      return "Anonymous";
    }
    return playerName;
  }

}
