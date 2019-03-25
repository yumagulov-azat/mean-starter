import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitializationService {

  constructor(
    private authService: AuthService,
  ) {
  }

  /**
   * Return promise for APP_INITIALIZER
   * @returns {Promise<boolean>}
   */
  public init_app(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.authService.check()
        .subscribe(
          res => resolve(true),
          err => resolve(true)
        );
    });
  }
}
