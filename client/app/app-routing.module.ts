import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/home/home.component';
import { AuthGuard } from '@app/core/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
  },
  {
    path: 'things',
    loadChildren: './things/things.module#ThingsModule',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
