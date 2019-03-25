import { NgModule } from '@angular/core';

import { UserRoutingModule } from '@app/user/user-routing.module';
import { UserComponent } from '@app/user/user.component';
import { UserLoginComponent } from '@app/user/components/user-login/user-login.component';
import { UserRegistrationComponent } from '@app/user/components/user-registration/user-registration.component';
import { SharedModule } from '@app/shared/shared.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [UserComponent, UserLoginComponent, UserRegistrationComponent, UserProfileComponent],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
