import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserSucessComponent } from './user-sucess/user-sucess.component';

const routes: Routes = [
  {path:'',component:UserHomeComponent},
  {path:'userHome',component:UserHomeComponent},
  {path:'userSignup',component:UserSignupComponent},
  {path:'usersucess',component:UserSucessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
