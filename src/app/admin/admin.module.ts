import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SharedModule } from '../shared/shared.module';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminSucessComponent } from './admin-sucess/admin-sucess.component';
import { NewBookingDetailsComponent } from './new-booking-details/new-booking-details.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AdminhomeComponent,
    AdminSignupComponent,
    AdminSucessComponent,
    NewBookingDetailsComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
