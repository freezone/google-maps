import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsDemoModule } from './google-maps-demo/google-maps-demo.module';

@NgModule({
  declarations: [
    AppComponent,
    //GoogleMapsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
