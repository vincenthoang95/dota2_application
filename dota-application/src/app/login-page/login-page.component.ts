import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginUser(loginForm){
    console.log(loginForm.value)
    if (loginForm.value.email == "vincenthoang95@gmail.com" && loginForm.value.password == "asd"){
      localStorage.setItem("name","askdjklfdjs")
      this.router.navigate(['/matches']);
    }
  }

}
