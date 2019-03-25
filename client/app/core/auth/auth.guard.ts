import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, CanActivateChild, } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthStatus } from './models/auth-status.model';


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
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
