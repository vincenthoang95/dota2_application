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
        this.players = data["players"];
      },
      error=> console.log(error)
    )

    this.loadMatchDeatils();
    
    
  }
  
  
  loadMatchDeatils(){

  }


}
