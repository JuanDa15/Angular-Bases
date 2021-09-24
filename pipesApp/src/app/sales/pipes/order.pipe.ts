import { Pipe, PipeTransform } from '@angular/core';
import { hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: hero[], sortBy:string = 'no value'): hero[] {

    switch(sortBy){
      case 'name':
        return value.sort((hero1,hero2) => (hero1.name > hero2.name)? 1 : -1);
        break;
      case 'color':
        return value.sort((hero1,hero2) => (hero1.color < hero2.color)? 1 : -1);
        break;
      case 'value':
        return value.sort((hero1,hero2) => (hero1.fly < hero2.fly)? 1 : -1);
        break;
      default:
        return value;
    } 
  }

}
