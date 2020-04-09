import { Component, OnInit, Input } from '@angular/core';
import { PlayerInfoService } from './player-info.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  @Input() teamPlayers;

  heroStats;
  itemIds;
  itemList;

  constructor(private playerInfoService: PlayerInfoService) { }

  ngOnInit() {
    this.playerInfoService.getHeroStats().subscribe(
      data=>this.heroStats = data,
      error=>console.log(error)
    );


    this.playerInfoService.getItemInfo().subscribe(
      data=>
      {
        this.itemIds = data["itemIds"];
        this.itemList = data["itemList"];
      },
      error=>console.log(error)
    )
  }


  getHeroImage(heroId){

    var img:string = this.heroStats[heroId].img;
    var imgName = img.split("/").pop().slice(0,-1);
    return imgName;
  }

  getItemImage(itemId){
    if(itemId == 0){
      return null;
    }
    var itemName = this.itemIds[itemId];
    var img = this.itemList[itemName]["img"].split("/").pop().slice(0,-16);
    // console.log(img.replace("\\?t*=*[0-9]*",""));
    return "assets/dota_item_image/" + img;
  }

  playerExists(playerName){
    if(playerName == null){
      return "Anonymous";
    }
    return playerName;
  }

  getItemDescription(itemId){
    var itemName = this.itemIds[itemId];
    return this.itemList[itemName];
  }

}
