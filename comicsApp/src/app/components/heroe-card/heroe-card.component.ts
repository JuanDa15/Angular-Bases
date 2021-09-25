import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [
  ]
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe!:Heroe;
  @Input() i!:number;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  seeHero(index:number ){
    this.router.navigate(['/heroe',index]);
  }

}
