import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserValid(loginCredential){
    console.log("In isUserValid", loginCredential);

    if(loginCredential.value.email == "admin" && loginCredential.value.password == "12345"){
      return  {
          credential : "valid",
          result : "success"
        };
      }
      else{
        return {
          credential : "invalid credential",
          result : "failure"
        };
      }
        
  }
}
