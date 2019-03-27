import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '@app/core/auth/auth.module';
import { ApiModule } from '@app/core/api/api.module';
import { AppInitializationModule } from '@app/core/app-initialization/app-initialization.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppInitializationModule,
    AuthModule,
    ApiModule
  ],
  exports: [
    AppInitializationModule,
    AuthModule,
    ApiModule
  ],
  providers: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
