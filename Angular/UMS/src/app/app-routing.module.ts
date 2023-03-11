import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  
  {
    path:'register',component:RegistrationComponent
  },
  {
    path:'welcome',component:WelcomeComponent
  },
  {
    path:'unlockAcc',component:UnlockUserComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
