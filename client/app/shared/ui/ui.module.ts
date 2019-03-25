import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMainHeaderComponent } from './components/layout/ui-main-header/ui-main-header.component';
import { UiMainWraperComponent } from './components/layout/ui-main-wraper/ui-main-wraper.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UiMainHeaderComponent,
    UiMainWraperComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    UiMainHeaderComponent,
    UiMainWraperComponent
  ]
})
export class UiModule {}
