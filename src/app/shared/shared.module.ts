import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatSelectModule} from '@angular/material/select';
import { SearchValuePipe } from '../search-value.pipe';
import { MatDialogModule } from '@angular/material/dialog';
 





   

// console.log('shared module'); 
 
@NgModule({
  
  declarations: [
    SearchValuePipe
    
 
  ],
  imports: [
    CommonModule,
    MatButtonModule,  
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatSelectModule,
    MatDialogModule

    
   
    
    
       
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    SearchValuePipe,
    MatDialogModule
   
   
   
   
    
    
   
    

  ]
})
export class SharedModule { }
