import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HeroModel } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class GetHeroeService {

  private _URL:string = `${environment.URL}`;
  constructor(private http:HttpClient) { }

  getHero(id:string):Observable<any>{
    return this.http.get<any>(`${this._URL}/Heroes/${id}.json`).pipe(
      
    );
  }
}
