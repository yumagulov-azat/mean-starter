import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@app/core/auth/auth.service';


@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken: string = this.authService.getToken();
    let transformedReq: HttpRequest<any>;

    // Add header
    if (accessToken) {
      transformedReq = req.clone({
        headers: req.headers.set('Authorization', accessToken),
      });
    }

    return next.handle(transformedReq || req);
  }
}
