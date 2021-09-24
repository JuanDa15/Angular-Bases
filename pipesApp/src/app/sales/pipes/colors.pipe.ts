import { Pipe, PipeTransform } from '@angular/core';
import { colors } from '../interfaces/hero.interface';

@Pipe({
  name: 'colors'
})
export class ColorsPipe implements PipeTransform {

  transform(value:number): string {
    return colors[value];
  }

}
