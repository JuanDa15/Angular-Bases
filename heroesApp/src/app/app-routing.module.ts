import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorpComponent } from './shared/errorp/errorp.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then( module => module.AuthModule )
  },
  {
    path: 'heroes',
    loadChildren: ()=> import('./heroes/heroes.module').then(module => module.HeroesModule),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
  },
  {
    path: '404', 
    component: ErrorpComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
