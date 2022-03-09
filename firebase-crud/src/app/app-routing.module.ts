import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroe/:id', component: HeroComponent},
  { path: 'create-hero', component: HeroComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
