import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  // productsForm: FormGroup = new FormGroup({
  //   productName : new FormControl(''),
  //   price       : new FormControl(0),
  //   existences  : new FormControl('')
  // })

  productsForm: FormGroup = this.formBuilder.group({
    productName: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required,Validators.min(0)]],
    existences: [,[Validators.required,Validators.min(0)]]
  })
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.productsForm.reset({
      productName: 'casa',
      price: 5000,
      existences: 1
    })
  }

  invalidField( field: string){
    return this.productsForm.controls[field].errors 
            && this.productsForm.controls[field].touched
  }

  save(){

    if(this.productsForm.invalid){
      this.productsForm.markAllAsTouched();
      return;
    }

    console.log(this.productsForm.value);
    this.productsForm.reset();
  }
}
