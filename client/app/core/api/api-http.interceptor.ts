import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { environment as env } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '@app/core/services/notification.service';
import { Router } from '@angular/router';
import { string } from 'joi';


@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken: string = this.authService.token;
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
