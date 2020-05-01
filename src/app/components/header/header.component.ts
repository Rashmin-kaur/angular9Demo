
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public isLogged = false;
  @ViewChild(MatSidenav) sidenav: MatSidenav;  

  currentUser: any;

  constructor( private router: Router, private Auth : AuthService  ) {}

  toggle(){
    this.Auth.hideSideBar = !this.Auth.hideSideBar ;
    console.log("AUTH SIDE baR", this.Auth.hideSideBar)
  }

  logout() {
      this.router.navigate(['/login']);
  }
}

