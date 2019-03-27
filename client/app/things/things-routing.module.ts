import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThingsComponent } from '@app/things/things.component';
import { ThingsListComponent } from '@app/things/components/things-list/things-list.component';

const routes: Routes = [
  {
    path: '',
    component: ThingsComponent,
    children: [
      {
        path: '',
        component: ThingsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThingsRoutingModule { }
