import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCommonServiceService } from 'src/app/common/api-common-service.service';
import { CommonService } from 'src/app/common/common.service';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-admin-sucess',
  templateUrl: './admin-sucess.component.html',
  styleUrls: ['./admin-sucess.component.scss'],
})
export class AdminSucessComponent {
  hotelbook: any;
  userName: any;
  userHotelDetails: any[] = [];
  showTable: boolean = false;
  dataById: any;
  inputVal:any;
  searchboxValue: any;
  showLogout: boolean=false;
  
  
 

 

  constructor(
    private router: Router,
    private apiCommonServiceService: ApiCommonServiceService,
    private commonService: CommonService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    console.log('ngoninit');
    this.userName = this.commonService.name;
    console.log(this.userName); 
    
  //  this.apiCall();

    // this.hotelDetails();
 
    
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

    async hotelDetails() {
    // onSubmitBooking();
    this.showTable = !this.showTable;
    
    // this.showForm = !this.showForm;

    let endpoint = 'hotelBooking';
    this.hotelbook = await this.apiCommonServiceService
      .getApiCall(endpoint)
      .toPromise();


     
    // this.hotelDetails();
    this.userHotelDetails = [];
    if (this.hotelbook) {
      this.detailsByAdmin(); 
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
  // async apiCall(){
  //   let endpoint = 'hotelBooking';
  //   this.hotelbook = await this.apiCommonServiceService.getApiCall(endpoint).toPromise();
  //     console.log('hotelbook', this.hotelbook);

  // } 
  

  detailsByAdmin() {
    this.userHotelDetails=[]
    this.hotelbook.forEach((element: any) => {
      if (element.OwnerName === this.userName){
         this.userHotelDetails.push(element);
        }
        
    });
    console.log('this.userHotelDetails', this.userHotelDetails);
  }



  async deleteHotel(id: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      // data: {id:id},
       width: '250px',
       height:'250px'
     })
     dialogRef.afterClosed().subscribe((yesValue:any)=>{
      if(yesValue === 'YES'){
        this.deleteRecord(id);
        this.showTable = !this.showTable 
        this.hotelDetails();
      } 
    }); 
  }
  async deleteRecord(id:number){ 
    await this.apiCommonServiceService.deleteApiCall('hotelBooking', id).toPromise();
      
    }
  async editHotel(id: number) {
    this.commonService.id = id;
    this.dataById = await this.apiCommonServiceService
      .getApiCall('hotelBooking', id)
      .toPromise();
    this.commonService.dataById = this.dataById;
    console.log(this.dataById);

    this.router.navigateByUrl('admin/bookingDetails');
    // this.showTable = !this.showTable;
  }
  // searchboxVal(){
  //   this.searchboxValue =this.inputVal;
  // }
} 
 