import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from '@app/core/auth/auth.module';
import { AppInitializationService } from '@app/core/services/app-initialization.service';
import { ApiHttpInterceptor } from '@app/core/services/api-http.interceptor';

export function init_app(appInitializationService: AppInitializationService) {
  return () => appInitializationService.init_app();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
  ],
  exports: [
    AuthModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitializationService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHttpInterceptor,
      multi: true,
    },
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
