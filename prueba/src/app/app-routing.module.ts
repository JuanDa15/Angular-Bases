import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './login/login-view/login-view.component';
import { PeliculasViewComponent } from './peliculas/peliculas-view/peliculas-view.component';
import { RegisterViewComponent } from './register/register-view/register-view.component';

const routes: Routes = [
  {path: '', component:LoginViewComponent},
  {path: 'registro', component:RegisterViewComponent},
  {path: 'peliculas', component: PeliculasViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
