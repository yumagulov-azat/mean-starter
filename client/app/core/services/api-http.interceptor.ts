import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken: string = this.authService.getToken();

    // Add header
    const transformedReq: HttpRequest = req.clone({
      headers: req.headers.set('Authorization', accessToken),
    });

    return next.handle(transformedReq);
  }
}
