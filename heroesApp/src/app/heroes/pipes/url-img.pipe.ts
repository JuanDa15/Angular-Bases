import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../Interfaces/heroe.interface';

@Pipe({
  name: 'urlImg',
  pure: false
})
export class UrlImgPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    if(heroe.alt_img === undefined){
      return `/assets/heroes/${heroe.id}.jpg`;
    }else if(heroe.alt_img){
      return heroe.alt_img;
    }else{
      return `assets/no-image.png`
    }
  }
}
