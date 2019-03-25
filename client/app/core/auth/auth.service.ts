import { Injectable } from '@angular/core';

// RxJs
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

// Services
import { StorageService } from '../services/storage.service';
import { AuthStatus, defaultAuthStatus } from './models/auth-status.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * BehaviorSubject for subscribe to authStatus
   */
  public authStatus: Subject<AuthStatus> = new Subject<AuthStatus>();

  constructor(
    private storage: StorageService,
    private http: HttpClient
  ) {
  }

  /**
   * Login and set status
   * @param email
   * @param password
   */
  public login(email: string, password: string): Observable<any> {
    this.logout();

    return this.http.post('/api/v1/auth/login', {
      email: email,
      password: password
    })
      .pipe(
        // Save token
        tap((res: any) => {
          if (res.data.status === 'SUCCESS') {
            this.setToken(res.data.token);
            this.authStatus.next({
              isAuthenticated: true,
              user: res.data.user
            });
          }
        })
      );
  }

  /**
   * Clear token, logout
   */
  public logout(): void {
    this.clearToken();
    this.authStatus.next(defaultAuthStatus);
  }

  /**
   * Return token from storage
   * @returns {string}
   */
  public getToken(): string {
    return this.storage.getItem('access-token');
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
