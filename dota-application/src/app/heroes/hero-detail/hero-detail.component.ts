import { Component, OnInit, Input } from '@angular/core';
import { ConstantsService } from 'src/app/common-services/constants.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() heroInfo;
  @Input() heroAbilities;

  heroesInfoList;
  heroAbilitiesList;

  abilitiesList;

  constructor(private constantService:ConstantsService) { }

  ngOnInit() {
    // this.constantService.getHeroesList().subscribe(
    //   data=>{
    //     // this.heroesInfoList=data;
    //     this.heroInfo = data[this.heroId];
    //     console.log(this.heroInfo);
    //     },
    //   error=>console.log(error)
    // )

    // this.constantService.getHeroesAbilityList().subscribe(
    //   data=> this.heroAbilitiesList = data[this.heroInfo.name],
    //   error=> console.log(error)
    // )

    this.constantService.getAbilitiesList().subscribe(
      data=> this.abilitiesList = data,
      error=>console.log(error)
    )
    
  }

  getHeroImage(imgPath){
    return imgPath.split("/").pop();
  }

  getAbilityImage(ability){
    // this.abilitiesList[ability].
    return ability + "_md.png"
  }


}
