import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJs
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

// Services
import { StorageService } from '@app/core/services/storage.service';
import { AuthStatus, defaultAuthStatus } from '@app/core/auth/models/auth-status.model';
import { AuthResponse } from '@app/core/auth/models/auth-reponse.model';
import { RegistrationRequest } from '@app/core/auth/models/registration-request';
import { ApiResponse } from '@app/core/api/api-response.model';
import { AuthRequest } from '@app/core/auth/models/auth-request.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * BehaviorSubject for subscribe to authStatus
   */
  public authStatus: BehaviorSubject<AuthStatus> = new BehaviorSubject<AuthStatus>(defaultAuthStatus);

  constructor(
    private storage: StorageService,
    private http: HttpClient,
  ) {
  }

  /**
   * Return token from storage
   * @returns {string}
   */
  public get token(): string {
    return this.storage.getItem('access-token');
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
    this.clearToken();
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
      this.setToken(res.data.token);
    }
  }

  /**
   * Save token to storage
   * @param {string} accessToken
   */
  private setToken(accessToken: string): void {
    this.storage.setItem('access-token', accessToken);
  }

  /**
   * Remove token from storage
   */
  private clearToken(): void {
    this.storage.removeItem('access-token');
  }
}
