import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Countries } from '../interfaces/countries.interface';
import { Country } from '../interfaces/country.interface';
import { MinCountry } from '../interfaces/minCountry.interface';

@Injectable({
  providedIn: 'root'
})
export class SelectorsService {

  private _Regions:string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  private _endPoint:string = 'https://restcountries.eu/rest/v2'

  constructor(private http:HttpClient) { }

  get regions(){
    return [...this._Regions];
  }

  getCountries(region:string):Observable<Countries[]>{

    const url: string = `${this._endPoint}/region/${region}?fields=alpha3Code;name`;

    return this.http.get<Countries[]>(url);
  }


  getFrontiers(code:string):Observable<Country | null>{
    if(code.trim().length !== 0){
      const url: string = `${this._endPoint}/alpha/${code}`;
      return this.http.get<Country>(url);
    }else{
      return of(null);
    }
  }

  getMinifiedCountry(code:string):Observable<MinCountry>{
    const url:string = `${this._endPoint}/alpha/${code}?fields=name;alpha3Code`;

    return this.http.get<MinCountry>(url);
  }

  getPaises(borders:string[]):Observable<MinCountry[] | []>{
    if(!borders){
      return of([]);
    }else{
      const peticiones:Observable<MinCountry>[] = [];

      borders.forEach(border => {
        const peticion = this.getMinifiedCountry(border);
        peticiones.push(peticion);
      });

      return combineLatest( peticiones );
    }
  }
}
