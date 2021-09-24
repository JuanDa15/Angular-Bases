import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../Interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  array: Heroe[] = [];
  constructor(private heroes:HeroesService) { }

  ngOnInit(): void{
    this.heroes.getHeroes()
      .subscribe(
        value => {
          this.array = value;
        })
  }

}
