import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasViewComponent } from './peliculas-view/peliculas-view.component';
import { CatalogoServiceService } from './services/catalogo-service.service';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PeliculasViewComponent,
    CatalogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PeliculasViewComponent
  ],
  providers:[
    CatalogoServiceService
  ]
})
export class PeliculasModule { }
