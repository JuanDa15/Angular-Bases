import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent{

  person = {
    genre: 'F',
    notifications: false,
  }

  tyc:boolean = false;

  constructor() { }



}
