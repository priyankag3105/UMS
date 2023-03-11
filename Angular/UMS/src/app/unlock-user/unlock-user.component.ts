import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UnlockuserService } from '../service/unlockuser.service';

@Component({
  selector: 'app-unlock-user',
  templateUrl: './unlock-user.component.html',
  styleUrls: ['./unlock-user.component.css']
})
export class UnlockUserComponent implements OnInit {

  constructor(private unlockservice:UnlockuserService, private pg:ActivatedRoute, private router:Router) { }

  unlockuser=new FormGroup({
   'email':new FormControl(''),
   'tempPwd':new FormControl(''),
   'newPwd':new FormControl(''),
   'confirmPwd':new FormControl('')
  })

  SaveUnlockdata(){
    this.unlockservice.unlockUser(this.unlockuser.value)
    .subscribe((res)=>console.log(res));
    this.router.navigate(['']);
    alert('Account Unlock Successfully')
    
  }

  ngOnInit(): void {
  }

}
