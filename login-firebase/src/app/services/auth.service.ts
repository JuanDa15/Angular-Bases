import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { userModel } from '../models/usuario.model';
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _URL:string = `${environment.URL}`;
  private token:string;

  get getToken(){
    return this.token;
  }

  constructor(private http:HttpClient,
              private router:Router) {
    this.readToken();
  }

  signOut(){
    localStorage.removeItem('email');
    this.router.navigateByUrl('login')
  }

  signIn(user:userModel){
    const endPoint:string = `accounts:signInWithPassword?key=${environment.API_KEY}`;

    const body:object = {
      ...user,
      returnSecureToken: true
    }

    return this.http.post(`${this._URL}${endPoint}`,body)
            .pipe(
              map( (answer:any) => {
                this.storageToken(answer.idToken)
                return answer;
              })
            );
  }

  signUp(user:userModel){
    const endPoint:string = `accounts:signUp?key=${environment.API_KEY}`;

    const body:object = {
      ...user,
      returnSecureToken: true
    }

    return this.http.post(`${this._URL}${endPoint}`,body)
            .pipe(
              map( (answer:any) => true)
            );
  }


  private storageToken(token:string):void{
    this.token = token;
    localStorage.setItem('token',token);

    let today:Date = new Date()
    today.setSeconds(3600);
    localStorage.setItem('expiresIn',today.getTime().toString());
  }

  readToken():void{
    const storagedToken = localStorage.getItem('token');
    (storagedToken)?
      this.token = storagedToken:
      this.token = '';
  }

  isAuthenticated(){
    if(this.getToken.length > 2){
      if(localStorage.getItem('expiresIn')){
        const expires:number = Number(localStorage.getItem('expiresIn'));
        const expiresDate:Date = new Date();
        expiresDate.setTime(expires);

        return (expiresDate >= new Date())? true: false;
      }
    }else{
      return false;
    }
  }
}
