import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectorsComponent } from './selectors/selectors.component';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    SelectorsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
