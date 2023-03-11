import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotpwdService {

  constructor(private http:HttpClient) { }

  forgotpassword(emailId:any){
    return this.http.get(`http://localhost:9090/forgotPwd/${emailId}`,{responseType:'text'})
  }
}
