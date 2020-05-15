import { Component, OnInit, Input, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-ability-description',
  templateUrl: './ability-description.component.html',
  styleUrls: ['./ability-description.component.css']
})
export class AbilityDescriptionComponent implements OnInit {
  @Input() abilityId;
  @Input() abilityIdList;
  @Input() abilityList;

  abilityInfo;

  constructor() { }

  ngOnInit() {
    var abilityName = this.abilityIdList[this.abilityId];
    this.abilityInfo = this.abilityList[abilityName];
  }


  displayIncrement(incrementValue){
    var result = "";
    // console.log(incrementList);
    if(typeof incrementValue === "string"){
      result += incrementValue
    }
    else{
      for(let value of incrementValue){
        // console.log(incrementValue[-1]);
        result+=value;
        if(value !== incrementValue[incrementValue.length-1]){
          result+="/";
        }
      }
    }
    return result;
  }

  

}
