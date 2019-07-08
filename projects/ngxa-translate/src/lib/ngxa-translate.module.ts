import { NgModule } from '@angular/core';
import { NgxaTranslatePipe } from './ngxa-translate.pipe';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgxaTranslateService, JsonLang } from './ngxa-translate.service';

@NgModule({
  declarations: [
    NgxaTranslatePipe
  ],
  imports: [],
  exports: [
    NgxaTranslatePipe
  ],
  providers: [
    NgxaTranslateService
  ]
})
export class NgxaTranslateModule {
  static forRoot(config: JsonLang): ModuleWithProviders {
    return {
      ngModule: NgxaTranslateModule,
      providers: [{
        provide: JsonLang,
        useValue: config
      }, NgxaTranslateService]
    };
  }
  static forChild(config: JsonLang): ModuleWithProviders {
    return {
      ngModule: NgxaTranslateModule,
      providers: [{
        provide: JsonLang,
        useValue: config
      }, NgxaTranslateService]
    };
  }
}
