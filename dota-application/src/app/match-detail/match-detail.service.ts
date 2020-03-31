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
    return this.http.get(this.constants.URL + "/testMatch")
  }
}