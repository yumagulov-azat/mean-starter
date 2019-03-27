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
   */
  public init_app(): Promise<boolean> {
    return new Promise((resolve) => {
      this.authService
        .check()
        .subscribe(
          () => resolve(true),
          () => resolve(true)
        );
    });
  }
}
