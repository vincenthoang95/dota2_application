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
  weekLayoutByYear = [];

  dateMatches = {};


  clickMatches = false;
  displayMatches;

  displayActivity = false;

  constructor(private constantService:ConstantsService) { }

  ngOnInit() {
    this.constantService.getPlayerMatches().subscribe(
      data => {
        this.allPlayerMatches = data;
        // let dateMatches = [];
        // let date = new Date(1555813605 * 1000);
        // console.log(date.getMonth());
        // console.log(date.getDate());
        // console.log(date.getFullYear());

        // for(let match of this.allPlayerMatches){
        //   let matchDate = new Date(match.start_time * 1000);
        //   if(date.getMonth() == matchDate.getMonth())
        //     if(date.getDate() == matchDate.getDate())
        //       if(date.getFullYear() == matchDate.getFullYear())
        //         dateMatches.push(match);
        // }
        // // console.log(data);
        // console.log(dateMatches);

        // let sortByYear = {};
        // let startYear = 2012;
        
        // for(let year = startYear; year <= this.date.getFullYear(); year++){
        //   let matchesList = []
        //   for(let match of this.allPlayerMatches){
        //     let matchDate = new Date(match.start_time * 1000);
        //     if(matchDate.getFullYear() == year){
        //       matchesList.push(match);
        //     }
        //   }
        //   sortByYear[year] = matchesList;
        // }
        // console.log(sortByYear);

        // var dateList = {};

        var startDate = new Date();
        startDate.setDate(1);
        startDate.setFullYear(2012);
        startDate.setMonth(0);

        // contructs a map with dates as key and value is an empty array
        while(true){
          this.dateMatches[startDate.toLocaleDateString()] = [];
          
          if(startDate.getDate() === this.date.getDate() && startDate.getMonth() === this.date.getMonth() && startDate.getFullYear() === this.date.getFullYear()){
            break;
          }
          startDate.setDate(startDate.getDate()+1);
        }

        // console.log(this.dateMatches);
        
        // adding match information based on the day played
        for(let match of this.allPlayerMatches){
          let matchDate = new Date(match.start_time * 1000);
          this.dateMatches[matchDate.toLocaleDateString()].push(match);
        }

        this.displayActivity = true;

      },
      error => console.log(error)
    );

    let testDate = new Date();
    testDate.setFullYear(2012);
    testDate.setMonth(0);
    testDate.setDate(1);


    let weekList = [];
    let weekNum = 1;
    let nextYear = testDate.getFullYear() + 1;

    // constructs a 3d array based on [year[month[(days in the week)]]]
    while(true){
      // console.log(testDate);
      // reaches to the end of the year (ex. 2019 -> 2020)
      if(testDate.getFullYear() == nextYear){
        // this.weekLayout[weekNum] = weekList;

        let weekListSize = weekList.length;
        if(!weekList[0]){
          
        }
        else if(weekListSize != 7){
          while(weekListSize != 7){
            weekList.push(0);
            weekListSize++;
          }
        }

        this.weekLayout.push({weekNum:weekList});
        this.weekLayout2d.push(weekList);

        this.weekLayoutByYear.push(this.weekLayout2d);
        this.weekLayout2d = [];
        
        // testDate.setFullYear(nextYear);
        // testDate.setMonth(0);
        // testDate.setDate(1);
        
        nextYear++;

        weekList = [];

        // console.log(this.weekLayoutByYear);
        continue;
        // break;
      }
      // adding in the days for the week
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
      
      // reaches the current date
      if(testDate.getFullYear() == this.date.getFullYear() && testDate.getMonth() == this.date.getMonth() && testDate.getDate() == this.date.getDate()){
        let weekListSize = weekList.length;
        if(weekListSize != 7){
          while(weekListSize != 7){
            weekList.push(0);
            weekListSize++;
          }
        // this.weekLayout[weekNum] = weekList;
        this.weekLayout.push({weekNum:weekList});
        this.weekLayout2d.push(weekList);
        
        this.weekLayoutByYear.push(this.weekLayout2d);
        this.weekLayout2d = [];

        }

        break;
      }


      testDate.setDate(testDate.getDate()+1);

    }

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

  // sets color of cicle based on wins and loses on day
  getColor(day){
    var date = new Date(day);
    var wins = 0;
    var losts = 0;

    for(let match of this.dateMatches[date.toLocaleDateString()]){
      if(match.player_slot <= 127 && match.radiant_win == false){
        losts++;
      }
      else if(match.player_slot <= 127 && match.radiant_win == true){
        wins++;
      }
      else if(match.player_slot > 127 && match.radiant_win == true){
        losts++;
      }
      else if(match.player_slot > 127 && match.radiant_win == false){
        wins++;
      }
    }


    let red = 0;
    let green = 0;

    if(!wins && !losts){
      // return null;
      return "rgb(0,0,0)";
    }
    else if(wins >  0 && !losts){
      red = 0;
      green = 255;
    }
    else if(losts > 0 && !wins){
      red = 255;
      green = 0;
    }
    else{
      var wlRatio = wins/losts;
      if(wlRatio > 1){
        green = 255;
        red = 0;
      }
      else if(wlRatio === 1){
        green = 255;
        red = 255;
      }
      else{
        red = 255//-255*(wins/losts);
        green = 255-(255*(losts-wins)/losts);
      }
    }

    return "rgb(" + red + "," + green + ",0)";

  }

  // depends on how games played that day
  getRadius(day){
    var date = new Date(day);

    var totalGame = this.dateMatches[date.toLocaleDateString()].length;

    if(totalGame === 0){
      return 20;
    }

    if(totalGame >= 10)
      return 10;

    return totalGame;
  }

  displayDay(date){
    if(date === 0) return 'blank';
    return new Date(date).toLocaleDateString();
  }

  // checks if games are played that day
  hasRecord(day){
    var date = new Date(day);
    if(this.dateMatches[date.toLocaleDateString()].length > 0){
      return true;
    }
    return false;
  }

  // returns number of loses on day
  getWins(day){
    var date = new Date(day);
    var wins = 0;
    for(let match of this.dateMatches[date.toLocaleDateString()]){
      if(match.player_slot <= 127 && match.radiant_win == true){
        wins++;
      }
      else if(match.player_slot > 127 && match.radiant_win == false){
        wins++;
      }
    }
    
    return wins;
  }

  // returns number of loses on day
  getLosts(day){
    var date = new Date(day);
    var losts = 0;
    for(let match of this.dateMatches[date.toLocaleDateString()]){
      if(match.player_slot <= 127 && match.radiant_win == false){
        losts++;
      }
      else if(match.player_slot > 127 && match.radiant_win == true){
        losts++;
      }
    }

    return losts;
  }

  // displays matches on top of page when day is clicked
  toggleDay(day){
    var date = new Date(day);
    this.displayMatches = this.dateMatches[date.toLocaleDateString()];
    if(this.displayMatches.length > 0){
      window.scrollTo(0,0);
      this.clickMatches = true;
    }
    else
      this.clickMatches = false;

    
  }

  // hides the matches of the day
  toggleOffMatches(){
    this.clickMatches = false;
  }

}
