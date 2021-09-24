import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ErrMsg]',
  
})
export class ErrMsgDirective implements OnInit {

  private htmlElement:ElementRef<HTMLElement>;
  @Input() set color( color:string){
    (color.length !== 0)?
      this.element.nativeElement.style.color = color:
      this.element.nativeElement.style.color = "#f00";
  }
  
  @Input() set messsage(msg:string){
    this.element.nativeElement.innerText = msg;
  }
  @Input() class:string = 'form-text'

  constructor(private element:ElementRef<HTMLElement>) { 
    this.htmlElement = element;
  }

  ngOnInit(): void {
    this.setClass();
  }


  setClass():void{
    this.element.nativeElement.classList.add(this.class);
  }

}
