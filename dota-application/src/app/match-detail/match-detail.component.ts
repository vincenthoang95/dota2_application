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
      data => console.log(data),
      error=> console.log(error)
    )

  }


}
