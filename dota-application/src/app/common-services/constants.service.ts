import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor(
    private http: HttpClient ,
    private constants: Constants
  ) {}

  getHeroesList(){
    return this.http.get(this.constants.URL + "/testHerosStats");
  }

  getHeroesAbilityList(){
    return this.http.get(this.constants.URL + "/getHeroesAbilitiesList");
  }

  getAbilitiesList(){
    return this.http.get(this.constants.URL + "/testAbilityList");
  }
}
