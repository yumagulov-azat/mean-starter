import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { environment as env } from '../../../environments/environment';


@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken: string = this.authService.token;
    const authHeader = { headers: req.headers.set('Authorization', accessToken) };

    const transformedReq: HttpRequest<any> = req.clone({
      url: env.apiUrl + req.url,
      ...accessToken ? authHeader : null
    });

    return next.handle(transformedReq);
  }
}
