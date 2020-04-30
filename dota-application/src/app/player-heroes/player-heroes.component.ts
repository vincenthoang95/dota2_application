import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../common-services/constants.service';
import {Sort} from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-player-heroes',
  templateUrl: './player-heroes.component.html',
  styleUrls: ['./player-heroes.component.css']
})
export class PlayerHeroesComponent implements OnInit {

  showFilter = false;

  playerHeroesStats;

  heroesList;

  page = 1;
  pageSize = 10;

  sortedData;

  displayData = [];

  patchInfo = JSON.parse('[{"name":"6.70","date":"2010-12-24T00:00:00Z","id":0},{"name":"6.71","date":"2011-01-21T00:00:00Z","id":1},{"name":"6.72","date":"2011-04-27T00:00:00Z","id":2},{"name":"6.73","date":"2011-12-24T00:00:00Z","id":3},{"name":"6.74","date":"2012-03-10T00:00:00Z","id":4},{"name":"6.75","date":"2012-09-30T00:00:00Z","id":5},{"name":"6.76","date":"2012-10-21T00:00:00Z","id":6},{"name":"6.77","date":"2012-12-15T00:00:00Z","id":7},{"name":"6.78","date":"2013-05-30T00:00:00Z","id":8},{"name":"6.79","date":"2013-11-24T00:00:00Z","id":9},{"name":"6.80","date":"2014-01-27T00:00:00Z","id":10},{"name":"6.81","date":"2014-04-29T00:00:00Z","id":11},{"name":"6.82","date":"2014-09-24T00:00:00Z","id":12},{"name":"6.83","date":"2014-12-17T00:00:00Z","id":13},{"name":"6.84","date":"2015-04-30T21:00:00Z","id":14},{"name":"6.85","date":"2015-09-24T20:00:00Z","id":15},{"name":"6.86","date":"2015-12-16T20:00:00Z","id":16},{"name":"6.87","date":"2016-04-26T01:00:00Z","id":17},{"name":"6.88","date":"2016-06-12T08:00:00Z","id":18},{"name":"7.00","date":"2016-12-13T00:00:00Z","id":19},{"name":"7.01","date":"2016-12-21T03:00:00Z","id":20},{"name":"7.02","date":"2017-02-09T04:00:00Z","id":21},{"name":"7.03","date":"2017-03-16T00:00:00Z","id":22},{"name":"7.04","date":"2017-03-23T18:00:00Z","id":23},{"name":"7.05","date":"2017-04-09T22:00:00Z","id":24},{"name":"7.06","date":"2017-05-15T15:00:00Z","id":25},{"name":"7.07","date":"2017-10-31T23:00:00Z","id":26},{"name":"7.08","date":"2018-02-01T00:00:00Z","id":27},{"name":"7.09","date":"2018-02-15T00:00:00.000Z","id":28},{"name":"7.10","date":"2018-03-01T00:00:00.000Z","id":29},{"name":"7.11","date":"2018-03-15T00:00:00.000Z","id":30},{"name":"7.12","date":"2018-03-29T00:00:00.000Z","id":31},{"name":"7.13","date":"2018-04-12T00:00:00.000Z","id":32},{"name":"7.14","date":"2018-04-26T00:00:00.000Z","id":33},{"name":"7.15","date":"2018-05-10T00:00:00.000Z","id":34},{"name":"7.16","date":"2018-05-27T00:00:00.000Z","id":35},{"name":"7.17","date":"2018-06-10T00:00:00.000Z","id":36},{"name":"7.18","date":"2018-06-24T00:00:00.000Z","id":37},{"name":"7.19","date":"2018-07-30T00:00:00.000Z","id":38},{"name":"7.20","date":"2018-11-19T18:00:00.000Z","id":39},{"name":"7.21","date":"2019-01-29T18:00:00.000Z","id":40},{"name":"7.22","date":"2019-05-25T00:00:00.000Z","id":41},{"name":"7.23","date":"2019-11-26T18:00:00.000Z","id":42},{"name":"7.24","date":"2020-01-27T00:00:00.000Z","id":43},{"name":"7.25","date":"2020-03-17T18:00:00.000Z","id":44},{"name":"7.26","date":"2020-04-18T00:00:00.000Z","id":45}]');

  regions=JSON.parse('{"1":"US WEST","2":"US EAST","3":"EUROPE","5":"SINGAPORE","6":"DUBAI","7":"AUSTRALIA","8":"STOCKHOLM","9":"AUSTRIA","10":"BRAZIL","11":"SOUTHAFRICA","12":"PW TELECOM SHANGHAI","13":"PW UNICOM","14":"CHILE","15":"PERU","16":"INDIA","17":"PW TELECOM GUANGDONG","18":"PW TELECOM ZHEJIANG","19":"JAPAN","20":"PW TELECOM WUHAN","25":"PW UNICOM TIANJIN","37":"TAIWAN"}');
  regionsList = Object.entries(this.regions);

  displayHeroes = false;

  constructor(
    private constantService:ConstantsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.displayHeroes = false;
      // this.playerHeroesStats = JSON.parse(this.constantService.getFilterPlayerHeroesPlayed(params['date'], params['patch'], params['region']));
      this.constantService.getFilterPlayerHeroesPlayed(params['date'], params['patch'], params['region']).subscribe(
        data => {
          this.playerHeroesStats = data;
          this.displayData = [];
          for(let hero of this.playerHeroesStats){
            var tempData:any = {};
            tempData.hero_id = hero.hero_id;
            tempData.matched_played = hero.games;
            let win = hero.win/hero.games;
            tempData.win = ((win >= 0) ? win : 0);
            tempData.played_with = hero.with_games;
            let win_with = hero.with_win/hero.with_games;
            tempData.win_with = ((win_with >= 0 ? win_with : 0));
            tempData.played_against = hero.against_games;
            let win_against = hero.against_win/hero.against_games;
            tempData.win_against = ((win_against >= 0) ? win_against : 0);
            this.displayData.push(tempData);
          }
          // console.log("this is the display data ", this.displayData);
          this.sortedData = this.displayData;
          this.displayHeroes = true;
        },
        error => console.log(error)
      )
      // console.log("reading route", this.playerHeroesStats);
    });
    // this.playerHeroesStats = JSON.parse(this.constantService.getPlayerHeroes());
    
    
    this.constantService.getHeroesList().subscribe(
      data=> {
        this.heroesList = data;
      },
      error=>console.log(error)
    )
  
    this.patchInfo.sort((a,b) => (a.name < b.name) ? 1 : -1);

  }

  heroImage(heroId){
    return this.heroesList[heroId].img.split('/').pop();
  }

  paginationSize(){
    console.log(this.playerHeroesStats.length/this.pageSize);
    return this.playerHeroesStats.length/this.pageSize;
  }

  getHeroName(heroId){
    return this.heroesList[heroId].localized_name;
  }



  sortData(sort: Sort) {
    const data = this.displayData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {

      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        // case 'hero': return compare(a.name, b.name, isAsc);
        case 'matchPlayed': return compare(a.match_played, b.match_polayed, !isAsc);
        case 'winPercent': return compare(a.win, b.win, isAsc);
        case 'playedWith':return compare(a.played_with, b.played_with, isAsc);
        case 'winWith':return compare(a.win_with, b.win_with, isAsc);
        case 'playedAgainst':return compare(a.played_against, b.played_against, isAsc);
        case 'winAgainst':return compare(a.win_against, b.win_against, isAsc);

        default: return 0;
      }
    });

    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }


  date(value: string){

    switch(value) {
      case "none":
        this.router.navigate([], {relativeTo:this.route, queryParams: { date: null }, queryParamsHandling: 'merge' });
        break;
      case "option1":
        this.router.navigate([], {relativeTo:this.route, queryParams: { date: 7}, queryParamsHandling: 'merge' });
        break;
      case "option2":
        this.router.navigate([], {relativeTo:this.route, queryParams: { date: 30 }, queryParamsHandling: 'merge' });
        break;
      case "option3":  
        this.router.navigate([], {relativeTo:this.route, queryParams: { date: 360 }, queryParamsHandling: 'merge' });
        break;
    }
  }

  patch(value: any): void {
    if(value === 'none'){
      this.router.navigate([], {relativeTo:this.route, queryParams: { patch: null }, queryParamsHandling: 'merge' });
    }
    else{
      this.router.navigate([], {relativeTo:this.route, queryParams: { patch: value }, queryParamsHandling: 'merge' });
    }
  }

  region(value: any){
    if(value === 'none'){
      this.router.navigate([], {relativeTo:this.route, queryParams: { region: null }, queryParamsHandling: 'merge' });
    }
    else{
      this.router.navigate([], {relativeTo:this.route, queryParams: { region: value }, queryParamsHandling: 'merge' });
    }
  }


  displayFilter(){
    this.showFilter = !this.showFilter;
    if(this.showFilter === false){
      this.router.navigate([], {relativeTo:this.route, queryParams: null});
    }
  }


}
