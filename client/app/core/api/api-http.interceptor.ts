import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment as env } from '../../../environments/environment';
import { NotificationService } from '@app/core/services/notification.service';
import { AuthTokenService } from '@app/core/auth/auth-token.service';


@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

  constructor(
    private authTokenService: AuthTokenService,
    private notificationService: NotificationService,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken: string = this.authTokenService.getToken();
    const authHeader = {headers: req.headers.set('Authorization', accessToken)};

    const transformedReq: HttpRequest<any> = req.clone({
      url: env.apiUrl + req.url,
      ...accessToken ? authHeader : null
    });

    return next.handle(transformedReq)
      .pipe(
        catchError((err) => {
          console.log((err.url as string).search('/auth/check'))
          if (err.error && err.error.type === 'UNAUTHORIZED' && (err.url as string).search('/auth/check') === -1) {
            this.notificationService.show('Auth required');
            this.router.navigateByUrl('/user/login');
          }
          return throwError(err);
        })
      );
  }
}
