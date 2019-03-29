import { Injectable } from '@angular/core';
import { StorageService } from '@app/core/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor(
    private storage: StorageService,
  ) { }

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
  public setToken(accessToken: string): void {
    this.storage.setItem('access-token', accessToken);
  }

  /**
   * Remove token from storage
   */
  public clearToken(): void {
    this.storage.removeItem('access-token');
  }
}
