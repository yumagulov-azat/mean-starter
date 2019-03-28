import { NgModule } from '@angular/core';
import { HomeComponent } from '@app/home/home.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
