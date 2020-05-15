import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})
export class HeroAbilityBuildService {

  constructor(
    private http: HttpClient ,
    private constants: Constants
    ){}
  getAbilityIds(){
    return this.http.get(this.constants.URL + "/testAbilityIds");
  }

  getAbilityList(){
    return this.http.get(this.constants.URL + "/testAbilityList")
  }
}
