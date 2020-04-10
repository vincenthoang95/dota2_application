import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.css']
})
export class ItemDescriptionComponent implements OnInit {

  @Input() itemIds;
  @Input() itemList;

  @Input() itemId;

  itemInfo;

  constructor() { }

  ngOnInit() {
    var itemName = this.itemIds[this.itemId];
    this.itemInfo = this.itemList[itemName];
  }


}
