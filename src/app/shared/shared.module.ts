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
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
 





   

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
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule

    
   
    
    
       
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule, 
    SearchValuePipe,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
   
   
   
    
    
    
   
    

  ]
})
export class SharedModule { }
