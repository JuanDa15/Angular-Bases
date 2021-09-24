import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AUTHService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authservice:AUTHService,
              private router:Router){
  }

  canActivate(): Observable<boolean > | boolean{
    return  this.authservice.renew()
              .pipe(
                tap(value => {
                  if(!value){
                    this.router.navigateByUrl('/auth');
                  }
                })
              );
  }

  canLoad(): Observable<boolean> | boolean {
    return this.authservice.renew()
    .pipe(
      tap(value => {
        if(!value){
          localStorage.removeItem('token');
          this.router.navigateByUrl('/auth');
        }
      })
    );
  }
}
