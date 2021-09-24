import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Personaje } from '../interfaces/personaje.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(){
  }

  ngOnInit(): void {
  }

  nuevoPersonaje:Personaje = {
    nombre:'',
    poder:0
  }

}
