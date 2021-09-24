import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  namePattern:string = '([a-zA-Z]+)( ([a-zA-Z]+) ?)+';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }

  noPuedeSerXD(control:FormControl):ValidationErrors | null{
    const valor = control.value?.trim().toLowerCase();
    if(valor === 'xd'){
      return {
        noXD: true
      }
    }else{
      return null;
    }
  }
  
  contraseñasIguales(contra:string, contra2:string):ValidationErrors | null{
    return ( control:AbstractControl) => {

      const pass1 = control.get(contra)?.value;
      const pass2 = control.get(contra2)?.value;

      if(pass1 === pass2){
        control.get(contra2)?.setErrors(null);
        return null;
      }else{
        control.get(contra2)?.setErrors({noIguales: true});
        return { noIguales: true}
      }
    }
  }
}
