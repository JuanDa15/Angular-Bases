import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe!:Heroe;

  casa:any = {
    'Marvel': 'Marvel Comics',
    'DC': 'DC Comics'
  }


  constructor(private ar:ActivatedRoute,
              private heroesService:HeroesService) { }

  ngOnInit(): void {
    this.ar.params.subscribe(
     ( {id}) => this.heroe = this.heroesService.getHeroe(id)
    )
  }

}
