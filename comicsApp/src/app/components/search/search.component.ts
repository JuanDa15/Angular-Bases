import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];
  value :string = '';

  constructor(private ar:ActivatedRoute,
              private heroesService:HeroesService) { }

  ngOnInit(): void {

    this.ar.params.subscribe(
      ({value}) => {
        this.heroes = this.heroesService.searchHero(value);
        this.value = value;
      }
    )
  }

}
