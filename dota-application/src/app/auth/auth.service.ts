import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isAuthenticated(){
    var testAuth = {"response": {"authenticated":false} }
    return testAuth
    // return this.http.get('/auth/isAuthenticated')
  }

}
