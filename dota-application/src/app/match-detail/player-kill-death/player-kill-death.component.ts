import { Component, OnInit, Input } from '@angular/core';
import { PlayerKillDeathService } from './player-kill-death.service';

@Component({
  selector: 'app-player-kill-death',
  templateUrl: './player-kill-death.component.html',
  styleUrls: ['./player-kill-death.component.css']
})
export class PlayerKillDeathComponent implements OnInit {


  @Input() player;


  heroName=[];
  heroNameList;


  constructor(private playerKDService:PlayerKillDeathService) { }

  ngOnInit() {

    this.playerKDService.getHeroNameList().subscribe(
      data=>this.heroNameList=data,
      error=>console.log(error)
    );


    for(let keys in this.player){
      if(keys.split("_")[2]==="hero"){
        this.heroName.push(keys);
      }
    }
     
  }


  getHeroImage(npcName){
    return this.heroNameList[npcName].img.split("/").pop().slice(0,-1);
  }

}
