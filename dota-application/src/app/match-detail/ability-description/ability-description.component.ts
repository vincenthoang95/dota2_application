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

  @Input() page;
  @Input() abilityName;

  abilityInfo;

  constructor() { }

  ngOnInit() {
    // console.log(this.page);
    // console.log(this.abilityName);
    if(this.page == "match_detail"){
      var abilityName = this.abilityIdList[this.abilityId];
      this.abilityInfo = this.abilityList[abilityName];
    }

    if (this.page == "heroes"){
      this.abilityInfo = this.abilityList[this.abilityName];
    }

    // console.log(abilityName)
    // console.log(this.abilityInfo)
  }

  // returning string based on multiple increments (ex. [12,34,66,100] to 12/34/66/100)
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
