import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Constants} from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})
export class MatchDetailService {

  constructor(
    private http: HttpClient ,
    private constants: Constants){
  
  }


  getMatchInfo(matchId){
    // uncomment for static
    // return this.http.get(this.constants.URL + "/testMatch");
    
    return this.http.get(this.constants.URL + "/matches/" + matchId);
  }


  getHeroStats(){
    return this.http.get(this.constants.URL + "/testHerosStats");
  }

  getItemInfo(){
    return this.http.get(this.constants.URL + "/getItemInfo");
  }

}