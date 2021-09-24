import { Component, Input, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../Interfaces/heroe.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [`
    mat-card{
      margin-top: 20px;
    }
  `]
})
export class HeroCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() heroe!: Heroe;

}
