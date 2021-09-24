import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/personaje.interface";

@Injectable()
export class dbzService{
  
  private _personajes:Personaje[] = [
    {
      nombre:"Goku",
      poder:5000
    },
    {
      nombre:"Vegeta",
      poder:4800
    },
    {
      nombre:"Gohan",
      poder:2000
    }
  ];

  constructor(){
  }

  get personajes():Personaje[]{
    return [...this._personajes];
  }

  agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje);
  }

}