import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorModule } from './contadorM/contador.module';
import { DBZModule } from './dbz/dbz.module';
import { HeroesModule } from './heroesCom/heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    contadorModule,
    HeroesModule,
    DBZModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
