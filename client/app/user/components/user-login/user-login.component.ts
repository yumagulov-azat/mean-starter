import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@app/core/auth/auth.service';
import { authError, AuthResponse } from '@app/core/auth/models/auth-reponse.model';
import { NotificationService } from '@app/core/services/notification.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public form: FormGroup;
  public error: authError;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['1233test@tester.ru33', Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  public login(): void {
    this.authService
      .login(
        this.form.get('email').value,
        this.form.get('password').value,
      )
      .subscribe((res: AuthResponse) => {
        if (res.success === true) {
          this.notificationService.show('Auth success')
          this.router.navigateByUrl('/');
        }
      }, (err) => {
        if (err.error && err.error.type) {
          this.error = err.error.type;
        }
      });
  }

}
