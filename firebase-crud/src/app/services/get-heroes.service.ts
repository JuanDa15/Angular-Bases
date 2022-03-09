import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HeroModel } from '../models/heroe.model';


@Injectable({
  providedIn: 'root'
})
export class GetHeroesService {
  private _URL:string = `${environment.URL}`;
  constructor(private http:HttpClient) { }

  getHeroes():Observable<any>{
    return this.http.get<any>(`${this._URL}/Heroes.json`).pipe(
      map( this.transformToArr )
    );
  }

  private transformToArr(heroesObj:any){
    if(heroesObj === null){ return []}
    const heroesArr:HeroModel[] = [];

    Object.keys(heroesObj).forEach( (key:any) => {
      const hero:HeroModel = heroesObj[key];
      hero.id = key;
      heroesArr.push(hero);
    })

    return heroesArr;
  }
}
