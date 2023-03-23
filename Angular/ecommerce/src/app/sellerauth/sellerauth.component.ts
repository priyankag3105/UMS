import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sellerauth',
  templateUrl: './sellerauth.component.html',
  styleUrls: ['./sellerauth.component.css']
})
export class SellerauthComponent implements OnInit {

  constructor() { }
  register=new FormGroup({
    'username' : new FormControl('',[Validators.required,Validators.minLength(1)]),
    'emails' : new FormControl('',[Validators.required,Validators.email]),
    'password' : new FormControl('',[Validators.required,Validators.minLength(6)]),
  })
  login=new FormGroup({
   
    'emails' : new FormControl('',[Validators.required,Validators.email]),
    'password' : new FormControl('',[Validators.required,Validators.minLength(6)]),
  })
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.register)
  }
  logindata:any
  openlogin(){
    this.logindata=true;
  }

  openregister(){
    this.logindata=false;
  }

}
