import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';

import { NgxaTranslateService, JsonLang } from './ngxa-translate.service';

@Pipe({
  name: 'toTranslate',
  pure: false
})
export class NgxaTranslatePipe implements PipeTransform {
  constructor(private json: JsonLang, private getLang: NgxaTranslateService, private pipeRef: ChangeDetectorRef) {
    this.getLang.onChangeLang.subscribe(() => {
      this.pipeRef.detectChanges();
      this.pipeRef.markForCheck();
    });
  }
  transform(value: string, args?: any) {
    const key = value.split('.');
    let buff = this.json.jsonOject[this.getLang.getDefualtLang()];
    key.forEach(k => {
      buff = buff[k];
    });
    return buff;
  }
}
