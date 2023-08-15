import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerSucessComponent } from './owner-sucess/owner-sucess.component';

const routes: Routes = [
  {path:'',component:OwnerHomeComponent},
  {path:'ownerHome',component:OwnerHomeComponent},
  {path:'ownersignup',component:OwnersignupComponent},
  {path:'ownerlogin',component:OwnerLoginComponent},
  {path:'ownersucess',component:OwnerSucessComponent}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
