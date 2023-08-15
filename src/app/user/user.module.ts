import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { SharedModule } from '../shared/shared.module';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserSucessComponent } from './user-sucess/user-sucess.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({ 
  declarations: [ 
    UserHomeComponent,
    UserSignupComponent,
    UserSucessComponent,
    BookingFormComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
