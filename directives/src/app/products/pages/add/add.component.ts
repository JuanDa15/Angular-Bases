import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  color:string = "#f00";

  productForm:FormGroup = this.fb.group({
    name: []
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  changeColor(){
    this.color = "#ff0";
  }
}
