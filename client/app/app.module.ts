import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core/core.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { HomeModule } from '@app/home/home.module';
import { SharedModule } from '@app/shared/shared.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
