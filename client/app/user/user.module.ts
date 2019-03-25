import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserComponent, UserLoginComponent, UserRegistrationComponent],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
