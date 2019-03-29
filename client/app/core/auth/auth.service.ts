import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJs
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

// Services
import { AuthStatus, defaultAuthStatus } from '@app/core/auth/models/auth-status.model';
import { AuthResponse } from '@app/core/auth/models/auth-reponse.model';
import { RegistrationRequest } from '@app/core/auth/models/registration-request';
import { ApiResponse } from '@app/core/api/api-response.model';
import { AuthRequest } from '@app/core/auth/models/auth-request.model';
import { AuthTokenService } from '@app/core/auth/auth-token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * BehaviorSubject for subscribe to authStatus
   */
  public authStatus: BehaviorSubject<AuthStatus> = new BehaviorSubject<AuthStatus>(defaultAuthStatus);

  constructor(
    private http: HttpClient,
    private authTokenService: AuthTokenService
  ) {
  }

  /**
   * Return token from storage
   * @returns {string}
   */
  public get userId(): string {
    const authStatus = this.authStatus.getValue();
    return authStatus.user && authStatus.user._id ? authStatus.user._id : null;
  }

  /**
   * Login and set status
   * @param authRequest
   */
  public login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/auth/login', authRequest)
      .pipe(
        tap((res: AuthResponse) => {
          this.setAuthStatus(res);
        })
      );
  }

  /**
   * Check user auth
   */
  public check(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>('/auth/check')
      .pipe(
        tap((res: AuthResponse) => {
          this.setAuthStatus(res);
        })
      );
  }

  /**
   * Registration
   * @param registrationRequest
   */
  public registration(registrationRequest: RegistrationRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('/auth/registration', registrationRequest);
  }

  /**
   * Clear token, logout
   */
  public logout(): Observable<any> {
    this.authTokenService.clearToken();
    this.authStatus.next(defaultAuthStatus);
    return of(null);
  }

  /**
   * Set auth status
   * @param res
   */
  private setAuthStatus(res: AuthResponse): void {
    this.authStatus.next({
      isAuthenticated: res.success,
      ...res.data.user ? {user: res.data.user} : {}
    });

    if (res.data && res.data.token) {
      this.authTokenService.setToken(res.data.token);
    }
  }
}
