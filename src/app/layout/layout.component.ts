import { Component, OnInit } from '@angular/core';
import { NgxaTranslateService } from 'projects/ngxa-translate/src/public-api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private setl: NgxaTranslateService) { }

  ngOnInit() {
  }
  onChange(lang) {
    this.setl.setDefualtLang(lang);
  }
}
