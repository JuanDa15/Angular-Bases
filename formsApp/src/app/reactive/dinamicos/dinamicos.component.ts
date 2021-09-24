import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent implements OnInit {

  favoritesForm: FormGroup = this.fb.group({
    name: [,[Validators.required,Validators.minLength(3)]],
    favorites: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ], Validators.required)
  });

  newFavorite  = new FormControl('', Validators.required);

  get favoritesArr(){
    return this.favoritesForm.get('favorites') as FormArray;
  }

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    console.log(this.favoritesForm);
  }

  invalidField( field:string){
    return this.favoritesForm.controls[field].errors && this.favoritesForm.controls[field].touched;
  }

  save(){
    if(this.favoritesForm.invalid){
      this.favoritesForm.markAllAsTouched();
      return
    }
    console.log(this.favoritesForm.value);
  }

  addFavorite(){
    if(this.newFavorite.valid){
      let element = this.fb.control(this.newFavorite.value,Validators.required);
      this.favoritesArr.push(element);
      this.newFavorite.reset();
    }
  }

  borrar( index:number){
    this.favoritesArr.removeAt(index);
    this.favoritesForm.updateValueAndValidity();
  }
}
