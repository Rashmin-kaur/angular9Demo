import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public authResult :  any;
  public invalidResult : any;
  isShowInvalid = false;
  profileForm:FormGroup;

  constructor( private Auth : AuthService,private fb: FormBuilder,private router: Router) { }

  ngOnInit() {

    this. profileForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]})
  }

  onSubmitClick(){

    console.log(this.profileForm,);
    event.preventDefault()

    this.authResult = this.Auth.isUserValid(this.profileForm);
    
    if(this.authResult.result === 'success'){

      this.isShowInvalid = false;
      this.router.navigate(['./dashboard']);  // redirect to next page
      
    }

    else {
      this.isShowInvalid = true;
      this.invalidResult = this.authResult.credential;
    }

  }

}