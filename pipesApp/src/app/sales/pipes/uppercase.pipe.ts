import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'uppercasePersonalized'
})

export class uppercasePipe implements PipeTransform{
  
  transform(value: string, ...args: any[]):string{
    if(args[0] == true){
      return  value.toUpperCase();
    }else{
      return value.toLowerCase();
    }
  }

  
}