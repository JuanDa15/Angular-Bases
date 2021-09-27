import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgPrimeModule } from '../ng-prime/ng-prime.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicComponent } from './pages/basic/basic.component';
import { OrderComponent } from './pages/order/order.component';
import { uppercasePipe } from './pipes/uppercase.pipe';
import { BooleanPipe } from './pipes/boolean.pipe';
import { ColorsPipe } from './pipes/colors.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { SafeDOMPipe } from './pipes/safe-dom.pipe';




@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicComponent,
    OrderComponent,
    uppercasePipe,
    BooleanPipe,
    ColorsPipe,
    OrderPipe,
    SafeDOMPipe
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports:[
    OrderComponent,
    NumbersComponent,
    NotCommonsComponent,
    BasicComponent
  ]
})
export class SalesModule { }
