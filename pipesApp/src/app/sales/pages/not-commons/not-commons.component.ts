import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

interface person{
  name: string,
  genre: string
}

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styleUrls: ['./not-commons.component.scss']
})
export class NotCommonsComponent implements OnInit {
// i18 n select
  persons: person[] = [{'name':'carlos','genre':'masculino'},
                      {'name':'camila','genre':'femenino'},
                      {'name':'daniel','genre':'masculino'},
                      {'name':'leidy','genre':'femenino'}]


  nombre:string = '';
  genero:string = '';
  position: number = 0;

  mapping = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  // i18nplural
  clientes: string[] = ['carlos','ramiro','carlos','andres'];

  pluralmapping = {
    '=0' : 'tenemos ningún cliente esperando',
    '=1' : `tenemos # cliente esperando`,
    'other' : 'tenemos # clientes esperando'
  }

  constructor(){
  }

  ngOnInit(): void {
    this.nombre = this.persons[0].name;
    this.genero = this.persons[0].genre;
  }

  changePerson(){
    if(this.position >= this.persons.length - 1){
      this.position = 0;
      this.nombre = this.persons[this.position].name;
      this.genero = this.persons[this.position].genre;
    }else{
      this.position += 1;
      this.nombre = this.persons[this.position].name;
      this.genero = this.persons[this.position].genre;
    }    
  }

  deleteClient(){
    this.clientes.pop();
  }
  

  persona = {
    nombre: 'carlos',
    edad: 40,
    ciudad: 'pereira'
  }


  // Async
  miObservable = interval(1000);
}
