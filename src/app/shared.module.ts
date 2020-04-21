import { NgModule } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

//import { PipesModule } from './pipes/pipes.module';

//import { ConfigService } from './config.service';


@NgModule({
  imports: [],
  declarations: [],
  providers: [],
  exports: [ TranslateModule ]
})
export class SharedModule {
  constructor(
    private translateService:TranslateService
  ) { 
    console.log("SharedModule.constructor() ");
    this.translateService.setDefaultLang("fr");
  }
}