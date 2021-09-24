import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public nombres:string[] = ['carlos','daniel','david'];
  public nombresBorrados:string[] = [];

  constructor(){}



  ngOnInit(): void {
  }

  borrarHeroe():void{
    let nombre = this.nombres.pop();
    if(nombre != undefined){
      this.nombresBorrados.push(nombre);
    }
  }
}
