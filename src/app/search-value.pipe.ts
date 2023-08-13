import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchValue'
})
export class SearchValuePipe implements PipeTransform {

  transform(hotelData:any,searchText:any): any {
    console.log('hotelData',hotelData);
    console.log('searchText',searchText);

    if(!searchText){          //If there is nthg(bcz ! not is used) inside searchtext it will return the whole cards
      return hotelData;
    }
    let search =searchText.toLowerCase();
    return hotelData.filter((element:any)=>{
      return JSON.stringify(element).toLowerCase().includes(search)
      // ok here above we are juss search whole table i.e element if u want to search on name juss add element.userName.
    })
    
    
    
  }

}
