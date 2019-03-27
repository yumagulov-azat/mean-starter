import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInitializationService } from '@app/core/app-initialization/app-initialization.service';


/**
 * Factory for AOT compatibility
 * @param appInitializationService
 */
export function init_app(appInitializationService: AppInitializationService) {
  return () => appInitializationService.init_app();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitializationService],
      multi: true
    },
  ]
})
export class AppInitializationModule { }

