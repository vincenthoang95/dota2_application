import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPlayerItem'
})
export class SortPlayerItemPipe implements PipeTransform {

  transform(player: any, ...args: any[]): any {
    var item1 = player.item_0;
    var item2 = player.item_1;
    var item3 = player.item_2;
    var item4 = player.item_3;
    var item5 = player.item_4;
    var item6 = player.item_5;
    var backpack1 = player.backpack_0;
    var backpack2 = player.backpack_1;
    var backpack3 = player.backpack_2;
    var itemNeutral = player.item_neutral;

    var itemList = [[item1,item2,item3,itemNeutral],[item4,item5,item6],[backpack1,backpack2,backpack3]];
    return itemList;
  }

}
