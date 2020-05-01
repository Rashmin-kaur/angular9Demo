import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public authResult :  any;
  isInvalid = false;
  profileForm : FormGroup;

  constructor( private Auth : AuthService,private formbuild: FormBuilder,private router: Router) { }

  ngOnInit() {

    this.profileForm = this.formbuild.group({
      email: ['', Validators.required],
      password: ['', Validators.required]})

    this.Auth.refreshList.subscribe(value => { 

      if(value){
        this.router.navigate(['./dashboard']);
      }
      else{
        this.isInvalid = true;
      }
        
    })
  }

  onSubmitClick(){
    this.Auth.isUserValid(this.profileForm.value);
  }

}