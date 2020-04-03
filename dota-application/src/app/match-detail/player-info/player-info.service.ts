import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {

  constructor(
    private http: HttpClient ,
    private constants: Constants
    ) { }


  getHeroStats(){
    return this.http.get(this.constants.URL + "/testHerosStats");
  }

  getItemInfo(){
    return this.http.get(this.constants.URL + "/getItemInfo");
  }
}
