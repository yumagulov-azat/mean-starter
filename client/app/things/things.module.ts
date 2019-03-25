import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThingsRoutingModule } from '@app/things/things-routing.module';
import { ThingsComponent } from '@app/things/things.component';

@NgModule({
  declarations: [
    ThingsComponent
  ],
  imports: [
    CommonModule,
    ThingsRoutingModule
  ]
})
export class ThingsModule { }
