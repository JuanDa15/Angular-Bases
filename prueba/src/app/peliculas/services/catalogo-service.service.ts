import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
environment
@Injectable({
  providedIn: 'root'
})
export class CatalogoServiceService {

  constructor(private http:HttpClient) { }

  /**
   * 
   * @returns 
   * this get returns the list of information that will be displayed later in the
   * following format
   * [
   *  {
   *    nombre: string,
   *    descripcion: string,
   *    duracion: string,
   *    precio: string,
   *    img: string
   *  },
   * {
   *    nombre: string,
   *    descripcion: string,
   *    duracion: string,
   *    precio: string,
   *    img: string
   *  }
   * ]
   * 
   */
  get(){
    return this.http.get(environment.back + 'peliculas');
  }
}
