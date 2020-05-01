import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public refreshList = new Subject<boolean>();
  public hideSideBar = true;

  constructor() {    
    console.log("eferesh vale",this.refreshList);

  }

  


  isUserValid(loginCredential){
    console.log("In isUserValid", loginCredential);

      if(loginCredential.email === 'admin' && loginCredential.password === '12345')
        this.refreshList.next(true);
      else
        this.refreshList.next(false);
        
  }


}
