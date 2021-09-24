import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit{

  switchForm:FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [false,Validators.required],
    terminos: [ false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones:true
  }


  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    this.switchForm.reset({
      ...this.persona,
      terminos: true
    });

    this.switchForm.get('terminos')?.valueChanges.subscribe(value => console.log(value));


    this.switchForm.valueChanges.subscribe({
      next: ({condiciones,...rest}) => {
        this.persona = rest;
      }
    })
  }

  save(){
    const formValue = {...this.switchForm.value};
    delete formValue.terminos;

    this.persona = formValue;

  }
}
