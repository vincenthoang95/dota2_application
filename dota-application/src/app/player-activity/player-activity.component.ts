import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../common-services/constants.service';
import { range } from 'rxjs';
import { MapType } from '@angular/compiler';

@Component({
  selector: 'app-player-activity',
  templateUrl: './player-activity.component.html',
  styleUrls: ['./player-activity.component.css']
})
export class PlayerActivityComponent implements OnInit {

  begin2020 = new Date(1577836800 * 1000);
  date = new Date();


  // time = 1578207559;
  time = 1328400078;

  allPlayerMatches;

  weekLayout = [];
  // weekLayout = {};
  weekLayout2d = [];

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
        // console.log(data);
        console.log(dateMatches);

        let sortByYear = new Map();
        let startYear = 2012;
        
        for(let year = startYear; year <= this.date.getFullYear(); year++){
          let matchesList = []
          for(let match of this.allPlayerMatches){
            let matchDate = new Date(match.start_time * 1000);
            if(matchDate.getFullYear() == year){
              matchesList.push(match);
            }
          }
          sortByYear.set(year, matchesList);
        }
        console.log(sortByYear.get(2012));

      },
      error => console.log(error)
    );


    let tempDate = new Date (1451590874 * 1000);
    console.log('before   ' + tempDate);
    let newDate = new Date(tempDate.setDate(tempDate.getDate() + 1));
    console.log('after    ' + newDate);

    let testDate = new Date();
    testDate.setFullYear(2020);
    testDate.setMonth(0);
    testDate.setDate(1);
    console.log(testDate);


    let weekList = [];
    let weekNum = 1;
    while(true){
      if(testDate.getFullYear() == 2021){
        // this.weekLayout[weekNum] = weekList;
        this.weekLayout.push({weekNum:weekList});
        this.weekLayout2d.push(weekList);
        break;
      }

      switch(testDate.getDay()){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          weekList.push(testDate.toString());
          break;
        case 6:
          weekList.push(testDate.toString());
          // this.weekLayout[weekNum] = weekList;
          this.weekLayout.push({weekNum:weekList});
          this.weekLayout2d.push(weekList);
          weekNum++;
          weekList = [];
          break;
      }
      
      if(testDate.getFullYear() == this.date.getFullYear() && testDate.getMonth() == this.date.getMonth() && testDate.getDay() == this.date.getDay()){
        let weekListSize = weekList.length;
        if(weekListSize != 7){
          while(weekListSize != 7){
            weekList.push(0);
            weekListSize++;
          }
        // this.weekLayout[weekNum] = weekList;
        this.weekLayout.push({weekNum:weekList});
        this.weekLayout2d.push(weekList);
        }

        break;
      }


      testDate.setDate(testDate.getDate()+1);

    }
    console.log(this.weekLayout)

    // for(let i of this.weekLayout){
    //   console.log(i);
    // }

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


  displayDay(date){
    if(date === 0) return 'blank';
    return new Date(date).toLocaleDateString();
  }


}
