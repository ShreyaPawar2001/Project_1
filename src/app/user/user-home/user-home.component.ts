import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCommonServiceService } from 'src/app/common/api-common-service.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {
  showLogout: boolean=false;
  loginForm!:FormGroup;
  interedValue!: any;
  // forgotPassword:boolean=false;
  
  ownerData: any;
  endpoint!:String;
  validUser: boolean=false;
  constructor(private router:Router, private commonService:CommonService,
    private formBulider:FormBuilder, private apiCommonServiceService:ApiCommonServiceService){}

   
  ngOnInit(){
    this.loginFormControllers();
    console.log('......');
    this.endpoint =this.commonService.journey;
    console.log('endpoint',this.endpoint);
  }
  loginFormControllers(){
    this.loginForm =this.formBulider.group({
      name:[''],
      password:['']
    })

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
  async onSubmitlogin(){
    this.interedValue = this.loginForm.value;
    console.log(this.interedValue);

    this.ownerData= await this.apiCommonServiceService.getApiCall(this.endpoint).toPromise()
    console.log('ownerData',this.ownerData);


    // this.router.navigateByUrl('owner/ownersucess')
    // this.getOwnerApiData();
    if(this.ownerData){
      this.isValidUser();
      if(this.validUser){
        this.commonService.sucessToaster('Password is correct','Success',
        {
          timeOut: 2000,
        positionClass: 'toast-top-center'
        })
        this.router.navigateByUrl('user/usersucess');
        // console.log('ownerData',this.ownerData);
      }
      // before else put toastr here
      else{
        this.commonService.warningToaster('Password is incorrect','Warning',
        {
          timeOut: 2000,
        positionClass: 'toast-top-center'
        })
        this.router.navigateByUrl('user/userHome');
      }
      
    }
    
    
    
  }
  // getOwnerApiData(){
  //   this.apiCommonServiceService.getApiCall(this.endpoint).subscribe(getAdminResponse=>{
  //     this.ownerData =getAdminResponse
  //     console.log('ownerData',this.ownerData);
      
      
  //   })
  //   console.log('ownerData',this.ownerData);
  // }
  isValidUser(){
    this.ownerData.forEach((element:any)=>{
     if( element.Name === this.loginForm.value.name && element.Password === this.loginForm.value.password){
      this.validUser= true;

     }
    });
    return
  }
  onSubmitforgot(){}









}
