import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PriceComponent } from './components/price/price.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pricing',
    component: PriceComponent
  },
  {
    path: 'protected',
    canActivate: [AuthGuard],
    component: ProtectedComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
