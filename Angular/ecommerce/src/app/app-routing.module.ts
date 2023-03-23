import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerauthComponent } from './sellerauth/sellerauth.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'seller-auth',component:SellerauthComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
