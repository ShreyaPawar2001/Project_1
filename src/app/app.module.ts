import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
// import { SearchValuePipe } from './search-value.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // SearchValuePipe 
    
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    SharedModule ,
    // SearchValuePipe
    
  ],
  exports:[
    // SearchValuePipe
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
