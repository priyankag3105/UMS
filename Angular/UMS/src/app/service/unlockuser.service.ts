import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnlockuserService {

  constructor(private http:HttpClient) { }

  unlockUser(data:any){
return this.http.post(`http://localhost:9090/unlock`,data,{responseType:'text'})
  }
}
