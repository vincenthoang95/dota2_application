import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../common-services/constants.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemsIdList;
  itemsList=[];


  constructor(private constantService:ConstantsService) { }



  ngOnInit() {
    this.constantService.getItemInfo().subscribe(
      data=>{
        // this.itemsList=data["itemList"]
        for(let key of Object.keys(data["itemList"])){
          this.itemsList.push(data["itemList"][key]);
        }
      },
      error=>console.log(error)
    )
  
  }

  imgName(imgPath){
      var img = imgPath.split("/").pop().slice(0,-16);
      // console.log(img.replace("\\?t*=*[0-9]*",""));
      return img;
    
  }


}
