import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCommonServiceService } from 'src/app/common/api-common-service.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-user-sucess',
  templateUrl: './user-sucess.component.html',
  styleUrls: ['./user-sucess.component.scss']
})
export class UserSucessComponent {
  hotelListDetails: any;
  inputVal:any;
  userName: any; 
  userHotelDetails:any[]=[];
  showTable:boolean=false;
  showLogout: boolean=false;

  hotel!: any;
  formShow:any;
  bookingForm!:FormGroup;

  ngOnInit(){
    
    console.log('ngoninit');
      this.userName=this.commonService.name;
  }

  constructor(private fb:FormBuilder,private router:Router,private apiCommonServiceService:ApiCommonServiceService,
    private commonService:CommonService){}
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
  

  
 

  

  // Hoteal Details ownerSucess.ts file 

  async hotelDetails(){
    this.showTable = !this.showTable
  

    let endpoint ='hotelList';
    this.hotelListDetails = await this.apiCommonServiceService.getApiCall(endpoint).toPromise()
    
    console.log('hotelList',this.hotelListDetails);
    this.userHotelDetails=[]
    if( this.hotelListDetails){
      this.detailsByUser();
      if(this.userHotelDetails.length > 0){

      }
    }
    else {
      alert('no owenr data avaible')
    }
    

  }
  detailsByUser(){
    // this.userHotelDetails=[]
    this.hotelListDetails.forEach((element:any)=>{
      if(element.Name === this.userName)
      this.userHotelDetails.push(element)
    })
    console.log('this.userHotelDetails',this.userHotelDetails);
    

  }
  // async deleteHotel(id: number){
  //   await this.apiCommonServiceService.deleteApiCall('hotelBooking',id).toPromise();
  //   this.showTable =!this.showTable;
  //   this.hotelDetails()
  // }
  // editHotel(id:number){}
}



