import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, CanActivateChild, } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Observable } from 'rxjs';
import { AuthService } from '@app/core/auth/auth.service';
import { AuthStatus } from '@app/core/auth/models/auth-status.model';
import { NotificationService } from '@app/core/services/notification.service';


/**
 * Guard for check user permissions
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  protected currentAuthStatus: AuthStatus;

  constructor(
    protected authService: AuthService,
    protected router: Router,
    protected notificationService: NotificationService
  ) {
    this.authService.authStatus.subscribe((authStatus: AuthStatus) => {
      this.currentAuthStatus = authStatus;
    });
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkLogin();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkLogin(route);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkLogin(childRoute);
  }

  protected checkLogin(route?: ActivatedRouteSnapshot) {
    if (!this.currentAuthStatus.isAuthenticated) {
      this.router.navigateByUrl('/user/login');
      this.notificationService.show('Auth required');
      return false;
    }

    return true;
  }
}
