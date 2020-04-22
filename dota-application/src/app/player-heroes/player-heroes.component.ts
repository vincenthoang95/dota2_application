import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../common-services/constants.service';

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


  constructor(
    private constantService:ConstantsService
  ) { }

  ngOnInit() {
    this.playerHeroesStats = JSON.parse(this.constantService.getPlayerHeroes());
    
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

}
