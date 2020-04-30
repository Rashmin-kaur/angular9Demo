import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public result = {};

  constructor() { }

  isUserValid(uname,pswd){
    console.log("In isUserValid", uname,pswd);

      if(uname == "admin" && pswd == "12345"){
        return this.result = {
          credential : "valid",
          result : "success"
        };
      }
      else{
        return this.result = {
          credential : "invalid credential",
          result : "failure"
        };
      }
        
  }
}
