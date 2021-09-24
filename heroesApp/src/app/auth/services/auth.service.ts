import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, of, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endPoint = environment.URL;
  private _user: User | undefined; 

  constructor( private http:HttpClient ) { }

  get auth():User{
    return {...this._user!};
  }


  login():Observable<User>{
    return this.http.get<User>(`${this.endPoint}/usuarios/1`)
      .pipe(
        tap( resp => this._user = resp),
        tap( resp => localStorage.setItem('id', resp.id))
      );
  }

  logOut(){
    localStorage.removeItem('id');
    this._user = undefined;
  }

  authVerification():Observable<boolean>{
    if(!localStorage.getItem('id')){
      return of(false);
    }else{
      
      return this.http.get<User>(`${this.endPoint}/usuarios/1`)
                .pipe(
                  map(() => {
                    return true;
                  })

      )
    }
  }
}
