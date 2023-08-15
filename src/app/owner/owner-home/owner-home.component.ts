import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCommonServiceService } from 'src/app/common/api-common-service.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.scss']
}) 
export class OwnerHomeComponent {
  showLogout: boolean=false;
  endpoint!:String;
  forgotPassword:boolean=false;
  showForgetPasswordForm:boolean=false;


  loginForm!:FormGroup;
  forgotForm!:FormGroup;
  ownerData: any;
  name!:string;
   validUser:boolean=false;

  constructor(private router:Router, private commonService:CommonService,
    private formBulider:FormBuilder,private apiCommonServiceService:ApiCommonServiceService){}
  ngOnInit(){
    this.loginFormControllers();
    this.forgotPasswordBulid();
    console.log('......');
    this.endpoint =this.commonService.journey;
    this.name =this.commonService.name;
    this.forgotPassword =this.commonService.forgotPassword
    console.log('endpoint',this.endpoint);
    this.getOwnerApiData();
    
  }
  loginFormControllers(){ 
    this.loginForm =this.formBulider.group({
      name:[''],
      password:[''],
    
    })

  }
  forgotPasswordBulid(){
    this.forgotForm =this.formBulider.group({
      newPassword:[''],
      Confirmpassword:['']
    })
  }

  // login(){
  //   this.router.navigateByUrl('owner/ownersucess')

  // }
  
  interedValue!: any;
  apiData!: any;
  matchFound!: any;
  
  // @ViewChild('signin') signinForm!: NgForm
  
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
    // this.getOwnerApiData();
    // this.ownerData= await this.apiCommonServiceService.getApiCall(this.endpoint).toPromise()


    // console.log('this.ownerData',this.ownerData);
    

    if(this.ownerData){
      this.isValidUser();
      if(this.validUser){
        this.commonService.sucessToaster('Password is correct','Success',
        {
          timeOut: 2000,
        positionClass: 'toast-top-center'
        })
        this.router.navigateByUrl('owner/ownersucess');
        // console.log('this.ownerData',this.ownerData);
      }
      // before else put toastr here
      else{

        this.commonService.warningToaster('Password is incorrect','Warning',
        {
          timeOut: 2000,
        positionClass: 'toast-top-center'
        })
        this.router.navigateByUrl('owner/ownerHome');
        this.commonService.forgotPassword = true
      }
      
    }
    // this.router.navigateByUrl('owner/ownersucess')
    
  }
  async getOwnerApiData(){
    this.ownerData= await this.apiCommonServiceService.getApiCall(this.endpoint).toPromise()


    console.log('this.ownerData',this.ownerData);
    
      
      
    
    
  }
  isValidUser(){
    this.ownerData.find((element:any)=>{
     if( element.Name === this.loginForm.value.name && element.Password === this.loginForm.value.password){
      this.validUser= true;

     }
    });
    return
  }
  // second form
  forgotBtn(){
    this.showForgetPasswordForm =!this.showForgetPasswordForm;
    this.forgotPasswordBulid();
  }
  onSubmitforgot(){
    this.updatePassword();
    this.showForgetPasswordForm =!this.showForgetPasswordForm;
    // this.forgotPassword=false;

  }
  async updatePassword(){
    var user:any;
    this.ownerData.forEach((element:any)=>{
      if(element.userName === this.name){
        user=element;
      }
    })
    if(user){
      let request ={
        Password:this.forgotForm.value.newPassword
      }
      await this.apiCommonServiceService.patchApiCall(this.endpoint,request,user.id).toPromise()
    }
    else{
      alert('useris not exist')
    }

  }

  

}
