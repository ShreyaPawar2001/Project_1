import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCommonServiceService {
  
  url =' http://localhost:3000/'

  constructor(public httpClient:HttpClient) { }

  postApiCall(formData:any,data:any){
    let Url = this.url +formData;
    return this.httpClient.post(Url,data);

  }
  getApiCall(formData:any,id?:number){
    let Url = id? this.url +formData +'/' +id :this.url +formData ;
    return this.httpClient.get(Url);
  }
  patchApiCall(endpoint:any,data:any,id:number){
    let Url =this.url +endpoint+'/'+id;
    return this.httpClient.patch(Url,data);
  }
  deleteApiCall(endpoint:string, id: number) {
    let Url = this.url +endpoint+'/'+id;
    return this.httpClient.delete(Url);
    
  }


}
