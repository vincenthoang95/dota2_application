import { Component, OnInit, Input } from '@angular/core';
import { HeroAbilityBuildService } from './hero-ability-build.service';

@Component({
  selector: 'app-hero-ability-build',
  templateUrl: './hero-ability-build.component.html',
  styleUrls: ['./hero-ability-build.component.css']
})
export class HeroAbilityBuildComponent implements OnInit {

  @Input() teamPlayers;
  @Input() heroInfo;
  
  abilityIdList;
  abilityList;

  totalLevels = 25;



  constructor(
    private heroAbilityBuildService:HeroAbilityBuildService
  ) { }

  ngOnInit() {
    this.heroAbilityBuildService.getAbilityIds().subscribe(
      data=>this.abilityIdList=data,
      error=>console.log(error)
    )

    this.heroAbilityBuildService.getAbilityList().subscribe(
      data=>this.abilityList=data,
      error=>console.log(error)
    )
  }

  totalLevelList(){
    var levelList = new Array();
    for(let i=1; i<=this.totalLevels; i++){
      levelList.push(i);
    }
    return levelList;
  }

  getHeroImage(heroId){
    var img:string = this.heroInfo[heroId].img;
    var imgName = img.split("/").pop().slice(0,-1);
    return imgName;
  }

}






