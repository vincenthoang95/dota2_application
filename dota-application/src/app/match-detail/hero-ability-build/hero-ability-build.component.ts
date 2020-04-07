import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { HeroAbilityBuildService } from './hero-ability-build.service';

@Component({
  selector: 'app-hero-ability-build',
  templateUrl: './hero-ability-build.component.html',
  styleUrls: ['./hero-ability-build.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroAbilityBuildComponent implements OnInit {

  @Input() teamPlayers;
  @Input() heroInfo;
  
  abilityIdList:any={};
  abilityList:any={};

  totalLevels = 25;

  initDone=false;
  initDone2=false;


  constructor(
    private heroAbilityBuildService:HeroAbilityBuildService
  ) { }

  ngOnInit() {
    this.heroAbilityBuildService.getAbilityIds().subscribe(
      data=>{
        this.abilityIdList=data
        this.initDone=true
        // console.log("this is data ",data);
      },
      
      error=>console.log(error)
      )
      this.heroAbilityBuildService.getAbilityList().subscribe(
        data=>{this.abilityList=data
          this.initDone2=true
    
      // console.log("this is data2 ",data);
    },
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

  getAbilityImage(abilityId):any{


    // console.log(abilityId);
    if(this.abilityIdList === undefined){
      console.log("abilityIdList is undefined");
    }
    if(this.abilityList === undefined){
      console.log("abilityList is undefined");
    }
    if(abilityId === undefined){
      return "";
    }
    var abilityName = this.abilityIdList[abilityId];
    // console.log("this asdkjklas ",this.abilityList)
    if (abilityName.split("_")[0] == "special"){
      return "talent.png";
    }
    else{
      // console.log(this.abilityList);
      var abilityImg = this.abilityList[abilityName]["img"].split("/").pop();
      return abilityImg;
    }
  }

  sortAbilities(abilityArray){
    // var newArray = new Array();
    // for(var abilityId of abilityArray ){
    //   newArray.push(abilityId);
    // }
    // console.log(newArray);

    var reverseList = abilityArray.reverse();
    
    var newArray = new Array();
    var level = 0;
    while(level < 25){

      // if(reverseList.length === 0){
      //   break;
      // }

      if([17,19,21,22,23,24].indexOf(level+1) !== -1){
        newArray.push(undefined);
      }
      else{
        newArray.push(reverseList.pop());
      }
      level++;
    }
    return newArray;
    // console.log(newArray)
  }

  

}






