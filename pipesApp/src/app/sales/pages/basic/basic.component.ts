import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  lowerName:string = "Juan David";
  upperName:string = "JUAN DAVID";
  titleName:string = "JuAn DaVid";

  date:Date = new Date(); //Actual Date
  constructor() { }

  ngOnInit(): void {
  }

}
