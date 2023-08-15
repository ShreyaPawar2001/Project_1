import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  journey!:string;
  name!:string;
  OwnerName:any;
  forgotPassword!:boolean;
  id!: any;
  dataById: any;
  selectedHotel!:any
  apiHotelData: any;

  constructor(private toastrService:ToastrService) { }

  warningToaster( msg:any, title:any, configuration:any ){
    this.toastrService.warning( msg, title, configuration)
}
sucessToaster( msg:any, title:any, configuration:any ){
  this.toastrService.success( msg, title, configuration)
}
}
