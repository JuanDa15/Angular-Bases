import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {

  totalSales:number = 9549494.8848;
  percentage:number = 0.52;

  constructor() { }

  ngOnInit(): void {
  }

}
