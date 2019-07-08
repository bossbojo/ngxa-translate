import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { th } from './i18n/th';
import { en } from './i18n/en';
import { kh } from './i18n/kh';
import { NgxaTranslateModule } from 'projects/ngxa-translate/src/public-api';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxaTranslateModule.forRoot({ jsonOject: { th, en, kh } })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
