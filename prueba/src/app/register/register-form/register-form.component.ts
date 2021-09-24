import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private registerservice:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
  /**
   * This form has the following restrictions:
   * nombre: must be required and maximum 20 characters
   * apellido: must be required and maximum 20 characters
   * correo: must be required and comply with the mail format "name@domain.co"
   * telefono1: must be required
   * telefono2: its optional
   * genero: must be required
   * edad: must be required and with and a maximum of 3 characters
   * direccion: must be required and maximum 40 characters
   * preferencias: must be required
   * clave1:  must be required
   * clave2:  must be required
   */
  public registerForm = new FormGroup({
    nombre: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(20)])),
    apellido: new FormControl('', Validators.compose([Validators.required,Validators.maxLength(20)])),
    correo: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    id : new FormControl('',Validators.compose([Validators.required,Validators.minLength(7), Validators.maxLength(10)])),
    telefono1: new FormControl('',Validators.required),
    telefono2: new FormControl('',),
    genero: new FormControl('',Validators.required),
    edad: new FormControl('',Validators.required),
    direccion: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(50)])),
    preferencias: new FormControl('',Validators.required),
    clave1: new FormControl('',Validators.required),
    clave2: new FormControl('',Validators.required)
  })

  /**
   * 
   * @param form form is the user information that will be registered in the following format:
   * {
   *  nombre: string;
   *  apellido: string;
   *  correo: string;
   *  id: number;
   *  telefono1: number;
   *  telefono2?: number;
   *  genero: string;
   *  edad: number;
   *  direccion: string;
   *  preferencias: string;
   *  clave1: string;
   * }
   * 
   * key2 is only used to verify that the password is equal to key1, after 
   *verification it is deleted from the object
   */
  signUp(form:any){
    delete form['clave2'];
    
    this.registerservice.post(form).subscribe(
      data=>{
        let response:any = data;
        Swal.fire({
          icon:"success",
          title: response['detailed'],
          timer:2000,
          position:"top-right"
        }),
        this.router.navigate(['peliculas']);
      },error=>{
        Swal.fire({
          icon:"success",
          title: "Error al registrarse",
          timer:2000,
          position:"top-right"
        })
      }
    )
  
  }
}
