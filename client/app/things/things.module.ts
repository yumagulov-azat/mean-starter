import { NgModule } from '@angular/core';

import { ThingsRoutingModule } from '@app/things/things-routing.module';
import { ThingsComponent } from '@app/things/things.component';
import { SharedModule } from '@app/shared/shared.module';
import { ThingsListComponent } from './components/things-list/things-list.component';
import { ThingsListItemComponent } from './components/things-list-item/things-list-item.component';
import { ThingsAddComponent } from './components/things-add/things-add.component';

@NgModule({
  declarations: [
    ThingsComponent,
    ThingsListComponent,
    ThingsListItemComponent,
    ThingsAddComponent
  ],
  imports: [
    SharedModule,
    ThingsRoutingModule
  ]
})
export class ThingsModule { }
