import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  saveLogin(data:any){
    return this.http.post(`http://localhost:9090/login`,data, {responseType:'text'})
  }
}
