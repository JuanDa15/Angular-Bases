import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})

export class ContadorComponent implements OnInit {

  public title:string = 'Contador';
  public counter:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  agregar(valor:number):void{
    this.counter+=valor;
  }

  quitar(valor:number):void{
    this.counter-=valor;
  }

}
