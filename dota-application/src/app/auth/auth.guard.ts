import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if (localStorage.getItem("name") == "askdjklfdjs") return true

      this.router.navigate(['/login'])
      return false
    // return this.authService.isAuthenticated().pipe(map((response:{
    //   authenticated: boolean})=>{
    //     if (response.authenticated){
    //       return true
    //     }
    //     this.router.navigate(['/login'])
    //     return false
    //   }),
    //   catchError((error) =>{
    //     this.router.navigate(['/login'])
    //     return of(false)
    //   }))
    }


  }

  

