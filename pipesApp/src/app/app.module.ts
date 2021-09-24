import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';

// Created Modules
import { SharedModule } from './shared/shared.module';

// Change the local of the app
import localEsCo from '@angular/common/locales/es-CO';
import localFr from '@angular/common/locales/fr'
import {registerLocaleData } from '@angular/common';


registerLocaleData(localEsCo);
registerLocaleData(localFr);
// ---------------------------------

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SalesModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
