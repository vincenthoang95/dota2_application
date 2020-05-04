import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../common-services/constants.service';

@Component({
  selector: 'app-player-activity',
  templateUrl: './player-activity.component.html',
  styleUrls: ['./player-activity.component.css']
})
export class PlayerActivityComponent implements OnInit {


  // time = 1578207559;
  time = 1328400078;

  color = "rgb(177.5,177.5,0)";

  allPlayerMatches;

  constructor(private constantService:ConstantsService) { }

  ngOnInit() {
    this.constantService.getPlayerMatches().subscribe(
      data => {
        this.allPlayerMatches = data;
        let dateMatches = [];
        let date = new Date(1555813605 * 1000);
        console.log(date.getMonth());
        console.log(date.getDate());
        console.log(date.getFullYear());

        for(let match of this.allPlayerMatches){
          let matchDate = new Date(match.start_time * 1000);
          if(date.getMonth() == matchDate.getMonth())
            if(date.getDate() == matchDate.getDate())
              if(date.getFullYear() == matchDate.getFullYear())
                dateMatches.push(match);
        }
        console.log(data);
        console.log(dateMatches);
      },
      error => console.log(error)
    );


    let tempDate = new Date (1451590874 * 1000);
    console.log('before   ' + tempDate);
    let newDate = new Date(tempDate.setDate(tempDate.getDate() + 1));
    console.log('after    ' + newDate);



  }

  checkDate(date){
    // return typeof date;
    let newDate = new Date(date);

    // console.log(newDate.getMonth()); // 0 == jan
    // console.log(newDate.getDate());
    // console.log(newDate.getFullYear());
    // console.log(newDate.getDay()); //6 == sat
    
    if(newDate.getFullYear() == 2020) return 'it is 2020';
    else return 'it is not 2020';
    return newDate;
  }


  getColor(){
    let red = 0;
    let green = 255
    return "rgb(" + red + "," + green + ",0)";
  }

  getRadius(){
    return 7;
  }

}
