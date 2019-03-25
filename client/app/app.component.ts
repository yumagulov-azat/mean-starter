import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/core/auth/auth.service';
import { AuthStatus } from '@app/core/auth/models/auth-status.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.authStatus
      .subscribe((authStatus: AuthStatus) => {
        if (authStatus.isAuthenticated === false) {
          // this.router.navigateByUrl('/');
        }
      });
  }
}

