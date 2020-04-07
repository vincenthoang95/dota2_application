import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAbilityLevel'
})
export class SortAbilityLevelPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var reverseList = value.reverse();
    
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
