import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../common-services/constants.service';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-player-heroes',
  templateUrl: './player-heroes.component.html',
  styleUrls: ['./player-heroes.component.css']
})
export class PlayerHeroesComponent implements OnInit {

  playerHeroesStats;

  heroesList;

  page = 1;
  pageSize = 10;

  sortedData;

  displayData = [];

  constructor(
    private constantService:ConstantsService
  ) { }

  ngOnInit() {
    this.playerHeroesStats = JSON.parse(this.constantService.getPlayerHeroes());
    for(let hero of this.playerHeroesStats){
      var tempData:any = {};
      tempData.hero_id = hero.hero_id;
      tempData.matched_played = hero.games;
      let win = hero.win/hero.games;
      tempData.win = ((win >= 0) ? win : 0);
      tempData.played_with = hero.with_games;
      tempData.win_with = hero.with_win/hero.with_games;
      tempData.played_against = hero.against_games;
      tempData.win_against = hero.against_win/hero.against_games;
      this.displayData.push(tempData);
    }
    // console.log(this.displayData);
    this.sortedData = this.displayData;
    
    this.constantService.getHeroesList().subscribe(
      data=> {
        this.heroesList = data;
      },
      error=>console.log(error)
    )
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

}
