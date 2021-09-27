import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'safeDOM'
})
export class SafeDOMPipe implements PipeTransform {

  constructor(private ds:DomSanitizer){

  }

  transform(url: string): SafeResourceUrl {
    return this.ds.bypassSecurityTrustResourceUrl(url);
  }

}
