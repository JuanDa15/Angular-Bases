import { stringify } from '@angular/compiler/src/util';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person{
  name: string;
  favorites: Favorite[]
}

interface Favorite{
  id: number;
  name:string;
}



@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent {

  newGame: string = "";
  @ViewChild('dinamicForm') dinamicForm!:NgForm;

  person: Person = {
    name: 'carlos',
    favorites: [
      { id: 1, name: 'call of duty' },
      { id: 2, name: 'cars' }
    ]
  }

  constructor() { }

  saveForm(){
    console.log(this.dinamicForm.value);
  }
  
  nameValidator(){
    return this.dinamicForm?.controls.name?.invalid && this.dinamicForm?.controls.name?.touched;
  }

  deleteItem( index: number){
    this.person.favorites.splice(index,1);
  }

  addFavorite(){

    if(this.newGame.length != 0){

      const favorite:Favorite = {
        id: this.person.favorites.length + 1,
        name: this.newGame
      }
      
      this.person.favorites.push({...favorite});
      this.newGame = "";
    }
  }

}
