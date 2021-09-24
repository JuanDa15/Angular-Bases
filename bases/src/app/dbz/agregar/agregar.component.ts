import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/personaje.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent{

  @Input() nuevoPersonaje:Personaje ={
    nombre:"",
    poder: 0
  };

  // @Output() onNewCharacter:EventEmitter<Personaje> = new EventEmitter();


  RE= {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    poder: /^[1-9][0-9]{0,3}$/
  }

  constructor(private dbzservice: dbzService){

  }

  agregar(){
    if((this.nuevoPersonaje.nombre.trim().length !=  0) && (this.nuevoPersonaje.poder > 0)){

      this.dbzservice.agregarPersonaje(this.nuevoPersonaje);
      // this.onNewCharacter.emit(this.nuevoPersonaje);
      this.nuevoPersonaje = {
        nombre:'',
        poder:0
      }
    }
  }

  verificarCampo(event:any){
    switch(event.target.name){
      case "nombre":
        this.validarRE(this.RE.nombre,event.target,'nombre');
        break;
      case "poder":
        this.validarRE(this.RE.poder,event.target,'poder');
        break; 
    }
  }

  validarRE(RE:RegExp,entrada:any,field:string):void{
    if(entrada.value == "" || entrada.value == 0){
      document.getElementById(`${field}`)?.classList.remove('erroneo');
      document.getElementById(`${field}`)?.classList.remove('valido');
    }else if(entrada.value == " "){
      document.getElementById(`${field}`)?.classList.remove('valido');
      document.getElementById(`${field}`)?.classList.add('erroneo');
    }else if(RE.test(entrada.value)){
      document.getElementById(`${field}`)?.classList.remove('erroneo');
      document.getElementById(`${field}`)?.classList.add('valido');
    }else{
      document.getElementById(`${field}`)?.classList.remove('valido');
      document.getElementById(`${field}`)?.classList.add('erroneo');
    }
  }

}
