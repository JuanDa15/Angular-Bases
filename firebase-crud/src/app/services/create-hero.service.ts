import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { postAnswer } from '../interfaces/postAnswer.interface';
import { HeroModel } from '../models/heroe.model';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class CreateHeroService {

  private _URL:string = `${environment.URL}`;
  constructor(private http:HttpClient) { }

  createHero(hero:HeroModel):Observable<HeroModel>{
    return this.http.post<postAnswer>(`${this._URL}/Heroes.json`,hero).pipe(
      map((answer:postAnswer) => {
        hero.id = answer.name;
        return hero;
      })
    );
  }
}
