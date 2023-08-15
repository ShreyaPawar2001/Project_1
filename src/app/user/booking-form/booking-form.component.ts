import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiCommonServiceService } from 'src/app/common/api-common-service.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {

  bookingFormData!: FormGroup;
  hotelName!: string;
  hotelTobeBooked: any; 
  showLogout: boolean=false;

  constructor(private router:Router,private formbuild:FormBuilder,private toaster: ToastrService,private apiCommonServiceService: ApiCommonServiceService,
    private commonService:CommonService ){}

  ngOnInit(){
    this.settingBookingForm()
    this.hotelTobeBooked = this.commonService.selectedHotel;
    // this.hotelName = this.hotelTobeBooked.hotelName
    console.log(this.hotelTobeBooked);
  }

  journey(journey:string){
    this.showLogout = true;
    if(journey === 'admin'){
      this.commonService.journey ='admin'
      this.router.navigateByUrl('admin')
    }
    else if(journey === 'owner'){
      this.commonService.journey ='owner'
      this.router.navigateByUrl('owner')

    }
    else{
      this.commonService.journey ='user'
      this.router.navigateByUrl('user')

    }

  }
 

  settingBookingForm(){
    this.bookingFormData = this.formbuild.group({
      fname: ["", [Validators.required, this.nospace]],
      lname: ["", [Validators.required, this.nospace]],
      email: ["", [Validators.required, Validators.email]],
      mobile: ["", [Validators.required, this.nospace]],
      arrivalDate: [""],
      departureDate: [""],
      guests: [1],
      address: [""],
      city: [""],
      state: [""],
      pin: [""],
      paymentMethod: ["upi"]
    })
  }

  onSubmit(){
    console.log(this.bookingFormData);
    console.log(this.bookingFormData.value);
    // alert("Hotel Booked Successfully");
    this.toaster.success(`Hotel Booked`,`Successful`)
    this.router.navigateByUrl('/user/usersucess');
  }
  nospace(control: FormControl){
    if(control.value != null && control.value.indexOf(" ") != -1){
      return {nospace : true};
      // return null;
      
    }else{
      return null;
      // return {nospace : true};
    }
  }
}
