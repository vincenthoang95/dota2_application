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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matchDetailService:MatchDetailService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>{
        this.matchId = params.get('matchId')
      }
    );

    this.matchDetailService.getMatchInfo(123).subscribe(
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

  getHeroImage(heroId){

    var img:string = this.heroStats[heroId].img;
    var imgName = img.split("/").pop().slice(0,-1);
    return imgName;
  }

  getItemImage(itemId){
    if(itemId == 0){
      return null;
    }
    var itemName = this.itemIds[itemId];
    var img = this.itemList[itemName]["img"].split("/").pop().slice(0,-16);
    // console.log(img.replace("\\?t*=*[0-9]*",""));
    return "assets/dota_item_image/" + img;
  }

  playerExists(playerName){
    if(playerName == null){
      return "Anonymous";
    }
    return playerName;
  }

}
