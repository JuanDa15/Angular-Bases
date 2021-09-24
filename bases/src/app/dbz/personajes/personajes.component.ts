import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  // @Input() personajes:Personaje[] = [];

  get personajes():Personaje[]{
    return this.dbz.personajes;
  }

  constructor(private dbz:dbzService){ }

  ngOnInit(): void {
  }

}
