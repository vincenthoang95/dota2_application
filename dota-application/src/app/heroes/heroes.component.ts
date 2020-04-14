import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../common-services/constants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroList=[];
  heroAbilitiesList;

  strHeroes=[];
  agiHeroes=[];
  intHeroes=[];

  showHero=false;

  heroInfo;
  heroAbilities;


  constructor(
    private constantService: ConstantsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.constantService.getHeroesList().subscribe(
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
      
    this.constantService.getHeroesAbilityList().subscribe(
      data=>this.heroAbilitiesList = data,
      error=>console.log(error)
    )

  }


  getHeroImage(imgPath){
    return imgPath.split("/").pop();
  }

  toggleDisplayHero(heroInfo){
    this.showHero = true;
    // this.heroId = heroId
    this.heroInfo = heroInfo;
    this.heroAbilities = this.heroAbilitiesList[heroInfo.name];
  }

  toggleHeroDisplay(heroId){
    this.router.navigate(['/heroes',heroId]);

  }

}
