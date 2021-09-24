import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FlexLayoutModule } from '@angular/flex-layout';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { UrlImgPipe } from './pipes/url-img.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroComponent,
    HomeComponent,
    ListComponent,
    HeroCardComponent,
    UrlImgPipe,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,

    MaterialModule,
    
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
