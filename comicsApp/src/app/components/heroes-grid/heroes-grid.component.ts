import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-grid',
  templateUrl: './heroes-grid.component.html',
  styles: [
  ]
})
export class HeroesGridComponent implements OnInit {

  @Input() heroes!:Heroe[];

  constructor() { }

  ngOnInit(): void {
  }



}
