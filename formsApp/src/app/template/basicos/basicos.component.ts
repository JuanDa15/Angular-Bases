import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  @ViewChild('testForm') testForm!:NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  submit(event:any){
    console.log(event);
    this.testForm.resetForm();
  }

  nameValidator():boolean{
    return this.testForm?.controls.product?.invalid 
          && this.testForm?.controls.product?.touched
  }

  validPrice():boolean{
    return this.testForm?.controls.price?.value < 0 &&
    this.testForm?.controls.price?.touched;
  }
}
