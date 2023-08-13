import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCommonServiceService } from 'src/app/common/api-common-service.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-new-booking-details',
  templateUrl: './new-booking-details.component.html',
  styleUrls: ['./new-booking-details.component.scss'],
})
export class NewBookingDetailsComponent {
  hotel!: any;
  formShow: any;
  bookingForm!: FormGroup;
  editId!: number;
  dataById: any;
  selectedValue:any;
  
  
  // @Input()onSubmitBooking: Function | undefined;


  ngOnInit() {
    this.editId = this.commonService.id;
    this.dataById =this.commonService.dataById;
    this.SubmitBooking();

    // this.getDataById();
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiCommonServiceService: ApiCommonServiceService,
    private commonService: CommonService
  ) {}

  SubmitBooking() {
    this.bookingForm = this.fb.group({
      ownername: [this.dataById ? this.dataById.OwnerName : '', []],
      ownercontact: [this.dataById ? this.dataById.OwnerContact : '', []],
      hotelname: [this.dataById ? this.dataById.HotelName : '', []],
      hoteladdress: [this.dataById ? this.dataById.HotelAddress : '', []],
      hotelcontact: [this.dataById ? this.dataById.HotelContact : '', []],
      hotelmenu: [this.dataById ? this.dataById.hotelMenu : '', []],
      rommsavailable: [this.dataById ? this.dataById.RommsAvailable : '', []],
      ownerpassword: [this.dataById ? this.dataById.OwnerPassword : '', []],
    });
  } 
  async onSubmitBooking() {
    
    let endpoint = 'hotelBooking';
    let request = {
      OwnerName: this.bookingForm.value.ownername,
      OwnerContact: this.bookingForm.value.ownercontact,
      HotelName: this.bookingForm.value.hotelname,
      HotelAddress: this.bookingForm.value.hoteladdress,
      HotelContact: this.bookingForm.value.hotelcontact,
      hotelMenu: this.bookingForm.value.hotelmenu,
      RommsAvailable: this.bookingForm.value.rommsavailable,
      OwnerPassword: this.bookingForm.value.ownerpassword,
    };
   if(this.editId){
    this.apiCommonServiceService.patchApiCall(endpoint, request,this.editId).subscribe((resp) => {
      console.log(resp);
    });
    

   }
   else{
    this.apiCommonServiceService.postApiCall(endpoint, request).subscribe((resp) => {
      console.log(resp);
    });
   }
   this.SubmitBooking();

    this.router.navigateByUrl('admin/adminsucess');
   
  }
  ngOnDestroy(){
    this.commonService.dataById ={};
    this.commonService.id ='';
  }
}
