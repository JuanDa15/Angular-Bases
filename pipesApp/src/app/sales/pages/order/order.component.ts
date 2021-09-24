import { Component, OnInit } from '@angular/core';
import { colors, hero } from '../../interfaces/hero.interface';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  flag:boolean = false;
  heros:hero[] = [
    {name:'carlos',fly:true,color: colors.blue},
    {name:'ramiro',fly:false,color: colors.gray},
    {name:'danilo',fly:true,color: colors.green},
    {name:'maravilla',fly:true,color: colors.red}
  ]

  parameter:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  change(){
    this.flag = !this.flag;
  }

}
