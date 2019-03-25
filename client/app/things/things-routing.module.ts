import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThingsComponent } from '@app/things/things.component';

const routes: Routes = [
  {
    path: '',
    component: ThingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThingsRoutingModule { }
