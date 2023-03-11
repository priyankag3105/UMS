import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getCountries(){
    return this.http.get(`http://localhost:9090/countries`)
  }

  getStatesByCountryId(countryId:any){
    return this.http.get(`http://localhost:9090/states/${countryId}`)
  }

  getCityByStateId(stateId:any){
    return this.http.get(`http://localhost:9090/cities/${stateId}`)
  }

  SaveRegisterdata(data:any){
   return this.http.post(`http://localhost:9090/saveUser`,data ,{responseType:'text'})
  }

  emailCheckUnique(email:any){
    return this.http.get(`http://localhost:9090/emailcheck/${email}`,{responseType:'text'})
   }
}
