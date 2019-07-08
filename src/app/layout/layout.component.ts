import { Component, OnInit } from '@angular/core';
import { NgxaTranslateService } from 'projects/ngxa-translate/src/public-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private setl: NgxaTranslateService, private ar: ActivatedRoute) { }

  ngOnInit() {
  }
  onChange(lang) {
    this.setl.setDefualtLang(lang);
  }
  onCheckRouter() {
    this.onChange(this.ar.snapshot.paramMap.get('lang'));
  }
}
