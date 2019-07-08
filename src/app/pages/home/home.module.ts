import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

import { th } from './i18n/th';
import { en } from './i18n/en';
import { kh } from './i18n/kh';
import { NgxaTranslateModule } from 'projects/ngxa-translate/src/public-api';
@NgModule({
  imports: [
    CommonModule,
    NgxaTranslateModule.forChild({ jsonOject: { th, en, kh } }),
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
