import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../Interfaces/heroe.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: .5rem;
    }
  `]
})
export class HeroComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private heroeservice:HeroeService) { }

  heroe!:Heroe;

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroeservice.getHeroe(id))
    )
    .subscribe(
      (value:Heroe) => {
        this.heroe = value;
      }
    )
  }

}
