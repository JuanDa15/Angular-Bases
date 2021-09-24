import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

interface login{
  email:string,
  password:string
}

interface register{
  email:string,
  name:string,
  password:string
}

interface loginAnswerValid{
  ok: boolean,
  msg: string,
  jwtUser?: string,
  name?: string,
  email?: string
  uid?:string
}

interface userInfo{
  name: string,
  email: string,
  uid:string
}

@Injectable({
  providedIn: 'root'
})
export class AUTHService {

  private _user!:userInfo;

  
  get user(){
    return {...this._user};
  }

  constructor(private http:HttpClient){ }

  register(body:register){
    const url:string = "http://localhost:4000/api/auth/new"

    return this.http.post<loginAnswerValid>(url,body)
            .pipe(
              tap( value => {
                if(value.ok){
                  this._user = {
                    name: value.name!,
                    email: value.email!,
                    uid: value.uid!
                  }
                  localStorage.setItem('token', value.jwtUser!);
                }
              }),
              map( value => value.ok),
              catchError(err => of(err.error.msg))
            );
  }


  login( body:login ):Observable<boolean> {

    const endPoint:string = 'http://localhost:4000/api/auth';
    return this.http.post<loginAnswerValid>(endPoint,body)
            .pipe(
              tap( value => {
                if(value.ok){
                  this._user = {
                    name: value.name!,
                    email: value.email!,
                    uid: value.uid!
                  }
                  localStorage.setItem('token', value.jwtUser!);
                }
              }),
              map( value => value.ok),
              catchError (err => of(err.error.msg)),
            );
  }

  renew(): Observable<boolean>{
    const url:string ="http://localhost:4000/api/auth/validate";
    const header = new HttpHeaders().set('x-token',localStorage.getItem('token') || '')

    return this.http.get<loginAnswerValid>(url,{headers: header})
    .pipe(
      map( value => {
        this._user = {
          name: value.name!,
          email: value.email!,
          uid: value.uid!
        }
        localStorage.setItem('token', value.jwtUser!);
        return value.ok
      }),
      catchError(err => of(false))
    )
  }
}
