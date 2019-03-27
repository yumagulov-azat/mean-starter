import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authError } from '@app/core/auth/models/auth-reponse.model';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth/auth.service';
import { NotificationService } from '@app/core/services/notification.service';
import { matchOtherValidator } from '@app/core/validators/match-other-validator';
import { RegistrationRequest } from '@app/core/auth/models/registration-request';
import { ApiResponse } from '@app/core/api/api-response.model';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

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
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      repeatPassword: [null, [Validators.required, Validators.minLength(8), matchOtherValidator('password')]]
    });
  }

  public registration(): void {
    const registrationRequest: RegistrationRequest = {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };

    this.authService
      .registration(registrationRequest)
      .subscribe(
        (res: ApiResponse) => {
          if (res.success === true) {
            this.notificationService.show('Registration success');
            this.router.navigateByUrl('/user/login');
          }
        },
        err => {
          if (err.error && err.error.type) {
            this.error = err.error.type;
          }
        }
      );
  }

}
