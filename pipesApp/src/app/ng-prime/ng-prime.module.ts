import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule} from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button'
import { TableModule  } from 'primeng/table';
import { ToolbarModule  } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  exports:[
    MenubarModule,
    CardModule,
    FieldsetModule,
    ButtonModule,
    ToolbarModule,
    TableModule
  ]
})
export class NgPrimeModule { }
