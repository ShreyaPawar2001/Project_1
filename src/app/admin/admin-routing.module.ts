import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminSucessComponent } from './admin-sucess/admin-sucess.component';
import { NewBookingDetailsComponent } from './new-booking-details/new-booking-details.component';

const routes: Routes = [
  {path:'',component:AdminhomeComponent},
  {path:'adminHome',component:AdminhomeComponent},
  {path:'adminSignup',component:AdminSignupComponent},
  {path:'adminsucess',component:AdminSucessComponent},
  {path:'bookingDetails',component:NewBookingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
