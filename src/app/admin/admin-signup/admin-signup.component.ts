import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCommonServiceService } from 'src/app/common/api-common-service.service';
import { CommonService } from 'src/app/common/common.service';

@Component({  
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent {
  signupForm!:FormGroup;
  submitValue: any;
  showLogout: boolean=false;
  signupResp: any;

  constructor(private fb:FormBuilder, private router:Router,private apiCommonServiceService:ApiCommonServiceService,
    private commonService:CommonService){}

  ngOnInit(){
    console.log('ownersigup');
    this.ownerSignup();
    
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

  ownerSignup(){
    this.signupForm =this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      contact:['',Validators.required],
      password:['',Validators.required],
      gender:['',Validators.required]



    

    })
  }

  async onSubmitSignup(){
    this.submitValue = this.signupForm.value;
    console.log(this.submitValue);
    let endpoint='admin'
    let formDat ={
      Name:this.signupForm.value.name,   //like wise if u want to send only a specific field through api calls .value.name
      Email:this.signupForm.value.email,
      Contact:this.signupForm.value.contact,
      Password:this.signupForm.value.password,
      Gender:this.signupForm.value.gender,
      

     
    }
    // this.apiCommonServiceService.postApiCall(endpoint,formDat).subscribe(resp=>{
    //   console.log(resp);
      
    // })
    this.signupResp =await this.apiCommonServiceService.postApiCall(endpoint,formDat).toPromise()


    this.router.navigateByUrl('admin/adminHome')
  }
}
