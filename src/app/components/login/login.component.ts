import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public authResult :  any;
  public invalidResult : any;
  isShowInvalid = false;

  constructor( private Auth : AuthService) { }

  ngOnInit() {
  }

  onSubmitClick(username, password){
    event.preventDefault()
    console.log("In onSubmitClick",username.value, password.value);


    this.authResult = this.Auth.isUserValid(username.value,password.value)
    if(this.authResult.result == "success"){
      this.isShowInvalid = false
      // redirect to next page
    }
    else{
      this.isShowInvalid = true;
      this.invalidResult = this.authResult.credential;
    }

  }

}
