import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { authError } from '@app/core/auth/models/auth-reponse.model';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth/auth.service';
import { NotificationService } from '@app/core/services/notification.service';
import { UserService } from '@app/user/services/user.service';
import { switchMap } from 'rxjs/operators';
import { UserResponse } from '@app/user/models/user-response';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public form: FormGroup;
  public error: authError | string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.userService
      .getCurrentUser()
      .subscribe(
        (res: UserResponse) => {
          this.prepareForm(res);
        },
        (err) => {
          this.error = 'COMMON';
        }
      );
  }

  public updateUser(): void {
    this.userService
      .updateCurrentUser(this.form.value)
      .pipe(
        switchMap(() => this.authService.check())
      )
      .subscribe(
        () => {
          this.notificationService.show('Update successful');
        },
        err => {
          if (err.error && err.error.type) {
            this.error = err.error.type;
          }
        }
      );
  }

  private prepareForm(res): void {
    this.form = this.formBuilder.group({
      email: res.data.email,
      name: res.data.name
    });
  }

}
