import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCommonServiceService } from 'src/app/common/api-common-service.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-owner-sucess',
  templateUrl: './owner-sucess.component.html',
  styleUrls: ['./owner-sucess.component.scss']
})
export class OwnerSucessComponent {
  hotelbook: any;
  userName: any; 
  userHotelDetails:any[]=[];
  showTable:boolean=false;
  hotel!: any;
  formShow:any;
  bookingForm!:FormGroup;
  dataById: any;
  inputVal:any;
  searchboxValue: any;
  

  ngOnInit(){
    this.SubmitBooking();
    console.log('ngoninit');
    this.userName = this.commonService.name;
    console.log(this.userName); 
  }

  constructor(private fb:FormBuilder,private router:Router,private apiCommonServiceService:ApiCommonServiceService,
    private commonService:CommonService){}

  
 

  SubmitBooking(){
    this.bookingForm =this.fb.group({
      ownername:['',[]],
      ownercontact:['',[]],
      hotelname:['',[]],
      hoteladdress:['',[]],
      hotelcontact:['',[]],
      hotelmenu:['',[]],
      rommsavailable:['',[]],
      ownerpassword:['',[]]

    })
  }
  onSubmitBooking(){
    let endpoint='hotelBooking';
    let request ={
      OwnerName:this.bookingForm.value.ownername,
      OwnerContact:this.bookingForm.value.ownercontact,
      HotelName:this.bookingForm.value.hotelname,
      HotelAddress:this.bookingForm.value.hoteladdress,
      HotelContact:this.bookingForm.value. hotelcontact,
      hotelMenu:this.bookingForm.value.  hotelmenu,
      RommsAvailable:this.bookingForm.value.rommsavailable,
      OwnerPassword:this.bookingForm.value.ownerpassword
    }
    this.apiCommonServiceService.postApiCall(endpoint,request).subscribe(resp=>{
      console.log('resp',resp);
      
    })
    this.router.navigateByUrl('owner/ownersucess')
   
  }
// ------------------------------------------------------------------xxxxxxxxxxxx------------
  // Hoteal Details ownerSucess.ts file 

  async hotelDetails() {
   
    this.showTable = !this.showTable;
    let endpoint = 'hotelBooking';
    this.hotelbook = await this.apiCommonServiceService.getApiCall(endpoint).toPromise();
    this.userHotelDetails = [];
    if (this.hotelbook) {
      this.detailsByOwner(); 
      if (this.userHotelDetails.length > 0) {
      }
     else {
      this.commonService.warningToaster('no any hotel avaible', 'Warning', {
        timeOut: 10000,
        positionClass: 'toast-top-center'
      })
    }
  }
    else{
      alert('no owner data avaliable')
    }
  }
  
  detailsByOwner() {
    this.userHotelDetails=[]
    this.hotelbook.forEach((element: any) => {
      if (element.Name === this.userName){
         this.userHotelDetails.push(element);
        }
        
    });
    console.log('this.userHotelDetails', this.userHotelDetails);
  }

  async deleteHotel(id: number){
    await this.apiCommonServiceService.deleteApiCall('hotelBooking',id).toPromise();
    this.showTable =!this.showTable;
    this.hotelDetails()
  }
  editHotel(id:number){}
 
} 


 






