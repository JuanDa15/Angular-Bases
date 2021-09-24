import { FormControl } from "@angular/forms";

export const namePattern:string = '([a-zA-Z]+)( ([a-zA-Z]+) ?)+';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerXD = (control:FormControl) => {
  const valor = control.value?.trim().toLowerCase();
  if(valor === 'xd'){
    return {
      noXD: true
    }
  }else{
    return null;
  }
}