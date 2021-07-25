import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ApiCallService } from './api-call.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    DashboradComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    ApiCallService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
