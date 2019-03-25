import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiMainHeaderComponent } from '@app/shared/ui/components/layout/ui-main-header/ui-main-header.component';
import { UiMainWraperComponent } from '@app/shared/ui/components/layout/ui-main-wraper/ui-main-wraper.component';
import { MaterialModule } from '@app/shared/material/material.module';

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
