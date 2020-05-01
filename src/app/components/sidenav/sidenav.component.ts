import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  List = [
    { title: 'Dashboard', link: 'home', icon: 'dashboard' },
    { title: 'Reports', link: 'payments', icon: 'pie_chart' },
  ];

  constructor(public Auth : AuthService ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.Auth.hideSideBar = true;
  }

}
