import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/auth/auth.service';
import { Observable } from 'rxjs';
import { AuthStatus } from '@app/core/auth/models/auth-status.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-main-header',
  templateUrl: './ui-main-header.component.html',
  styleUrls: ['./ui-main-header.component.scss']
})
export class UiMainHeaderComponent implements OnInit {

  public $authStatus: Observable<AuthStatus> = this.authService.authStatus;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public logout(): void {
    this.authService
      .logout()
      .subscribe(() => this.router.navigateByUrl('/'));
  }

}
