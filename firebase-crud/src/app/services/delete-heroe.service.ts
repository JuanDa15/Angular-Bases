import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteHeroeService {

  private _URL:string = `${environment.URL}`;
  constructor(private http:HttpClient) { }

  deleteHero(id:string):Observable<any>{
    return this.http.delete<any>(`${this._URL}/Heroes/${id}.json`);
  }
}
