import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../common-services/constants.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroList=[];

  strHeroes=[];
  agiHeroes=[];
  intHeroes=[];


  constructor(
    private constantService: ConstantsService
  ) { }

  ngOnInit() {
    this.constantService.getHeroStats().subscribe(
      data=>{
        // this.heroStats = Object.keys(data).map(i => data[i])
        for(let key of Object.keys(data)){
          if(data[key].primary_attr === "str"){
            this.strHeroes.push(data[key])
          }
          else if(data[key].primary_attr === "agi"){
            this.agiHeroes.push(data[key])
          }
          else if(data[key].primary_attr === "int"){
            this.intHeroes.push(data[key])
          }

        }
        this.strHeroes.sort((a,b) => (a.localized_name > b.localized_name) ? 1:-1)
        this.agiHeroes.sort((a,b) => (a.localized_name > b.localized_name) ? 1:-1)
        this.intHeroes.sort((a,b) => (a.localized_name > b.localized_name) ? 1:-1)
      }
      )
      
      this.sortHeroes();

  }

  sortHeroes(){
  }

}
