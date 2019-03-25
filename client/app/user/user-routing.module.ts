import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from '@app/user/user.component';
import { UserLoginComponent } from '@app/user/components/user-login/user-login.component';
import { UserRegistrationComponent } from '@app/user/components/user-registration/user-registration.component';
import { UserProfileComponent } from '@app/user/components/user-profile/user-profile.component';
import { AuthGuard } from '@app/core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'login',
        component: UserLoginComponent
      },
      {
        path: 'registration',
        component: UserRegistrationComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
