import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/shared/services/email.service';
import { ValidationsService } from 'src/app/shared/services/validations.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  get emailErrorMsg(){
    const errors = this.registerForm.get('email')?.errors;

    if(errors?.required){
      return 'Email Obligatorio'
    }else if(errors?.pattern){
      return 'El formato del correo debe ser correo@correo.com';
    }else if(errors?.emailTomado){
      return 'El correo ya a sido tomado';
    }else{
      return '';
    }
  }

  registerForm: FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.pattern(this.vs.namePattern)]],
    email: ['',[Validators.required,Validators.pattern(this.vs.emailPattern)], [this.ev]],
    username: ['',[Validators.required, this.vs.noPuedeSerXD]],
    password: ['',[Validators.required,Validators.minLength(6)]],
    password2: ['',[Validators.required]]
  },{
    validators: [this.vs.contraseñasIguales('password','password2')]
  })

  constructor(private fb: FormBuilder,
              private vs: ValidationsService,
              private ev: EmailService) { }

  ngOnInit(): void {
  }

  campoNoValido( campo: string){
    return this.registerForm.get(campo)?.invalid
            && this.registerForm.get(campo)?.touched;
  }


  guardar():void{

    console.log(this.registerForm.value);
    this.registerForm.markAllAsTouched();
  }

}
