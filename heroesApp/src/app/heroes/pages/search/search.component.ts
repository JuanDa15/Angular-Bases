import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router, RouterLink } from '@angular/router';
import {Observable} from 'rxjs';
import { Heroe } from '../../Interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`
  .example-full-width{
    width: 100%;
  }
  `]
})
export class SearchComponent implements OnInit {

  term:string = "";
  heroes: Heroe[] = [];

  constructor(private heroesService:HeroesService, private router:Router) { }

  ngOnInit(): void {
  }

  search(){
    if(this.term.trim().length != 0){
      this.heroesService.getSuggestions(this.term).subscribe(
        value => this.heroes = value
      )
    }else{
      this.heroes = [];
      this.term = "";
    }
  }

  selectedOption( event:MatAutocompleteSelectedEvent){
    if(event.option.value){
      const hero: Heroe = event.option.value;
      this.term = hero.superhero;
    
      this.router.navigate(['heroes',hero.id])
    }else{
      this.term = " ";
    }
  }

}
