import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/auth/auth.service';
import { Observable } from 'rxjs';
import { AuthStatus } from '../../../../../core/auth/models/auth-status.model';

@Component({
  selector: 'app-ui-main-header',
  templateUrl: './ui-main-header.component.html',
  styleUrls: ['./ui-main-header.component.scss']
})
export class UiMainHeaderComponent implements OnInit {

  public $authStatus: Observable<AuthStatus> = this.authService.authStatus;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
