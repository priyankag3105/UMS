import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userservice:UserService,private route:Router) { }

  ngOnInit(): void {
    this.getAllCountries()
  }
  register=new FormGroup({
    'cityId': new FormControl(''),
    'countryId': new FormControl(''),
    'dob': new FormControl(''),
    'email': new FormControl('',[Validators.required,Validators.email]),
    'fname': new FormControl(''),
    'gender': new FormControl(''),
    'lname': new FormControl(''),
    'phno': new FormControl('',[Validators.required,Validators.minLength(10)]),
    'stateId': new FormControl(''),

  })
countries:any;
states:any;
cities:any;


  getAllCountries(){
    this.userservice.getCountries().subscribe((resonse:any)=>{this.countries=resonse},err=>{console.log(err)})
  }

  getstatesbycountryid(countryId:any){
    this.userservice.getStatesByCountryId(countryId).subscribe((response:any)=>{this.states=response},err=>{console.log(err)})
  }

  getcitiesbystateid(stateId:any){
    this.userservice.getCityByStateId(stateId).subscribe((response:any)=>{this.cities=response},err=>{console.log(err)})
  }



  checkemail:any;
  emailcheck(register:FormGroup){
this.userservice.emailCheckUnique(register.value.email).subscribe((res)=>{
  this.checkemail=res;
  console.log(this.checkemail);
  if(this.checkemail=='DUPLICATE'){
    alert('enter new email id');
  }
  else{
    this.saveUser()
  }
})
  }
  
  saveUser(){
    this.userservice.SaveRegisterdata(this.register.value)
    .subscribe((res)=>{console.log(res)
    
  }
  
  )
  alert('Check your email to unlock your account ');
    // this.route.navigate([''])
  }
  // emailcheck(email:any){
  //   this.userservice.uniqueemailcheck(email).subscribe((res)=>)
  // }

  // onSubmit(){
  //   alert('hi');
  //   console.log(this.register)
  // }
}
