import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../Interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private endpoint = environment.URL;
  constructor(private http:HttpClient) {}

  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.endpoint}/heroes`);
  }

  getSuggestions(query:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.endpoint}/heroes?q=${query}&_limit=5`)
  }
}
