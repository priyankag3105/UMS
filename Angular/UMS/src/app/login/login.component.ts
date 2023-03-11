import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotpwdService } from '../service/forgotpwd.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
dataformat:any
  constructor(private loginservice:LoginService, private forgotservice:ForgotpwdService, private router:Router) { }
success:any;
  ngOnInit(): void {
 
  }

  login=new FormGroup({
    'email' : new FormControl('',[Validators.required,Validators.email]),
    'pwd' : new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

chech(){
  alert('hi');
  if(this.dataformat=="Invalid Credentials"){
    alert('invalid Input');
  }
  else{
    this.Saveloogindata()
  }
}
  Saveloogindata(){
    this.loginservice.saveLogin(this.login.value)
    .subscribe((res)=>{
      this.dataformat=res;
      console.log(res);
      this.success=res;
      if(this.success=='SUCCESS'){
        this.router.navigate(['/welcome']).then(()=>window.location.reload());
      }
    })
    
  }

  forgot=new FormGroup({
    'emailId':new FormControl('')
  })


  getpassword(){
this.forgotservice.forgotpassword(this.forgot.value.emailId).subscribe((res)=>{console.log(res)});
alert('We have sent password to your email');
  }

 
}
