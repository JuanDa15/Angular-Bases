import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../Interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  
  private endPoint = environment.URL;

  constructor(private http: HttpClient) { }

  getHeroe(heroe:String):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.endPoint}/heroes/${heroe}`);
  }

  postHeroe(hero:Heroe):Observable<Heroe>{
    return this.http.post<Heroe>(`${this.endPoint}/heroes`,hero);
  }

  updateHeroe(hero:Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`${this.endPoint}/heroes/${hero.id}`,hero);
  }

  deleteHeroe(id:string){
    return this.http.delete(`${this.endPoint}/heroes/${ id }`);
  }
}
