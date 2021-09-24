import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInService } from '../services/log-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  /**
   * The form has restrictions on the "correo" field, which is required and complies with a mail format
   * and the "clave" field only asks that it be required
   */
  public loginForm = new FormGroup({
    correo: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    clave: new FormControl('',Validators.required)
  });

  constructor(private login:LogInService,private router:Router) { }

  ngOnInit(): void {
  }

  /**
   * 
   * @param form 
   * 
   *in the form variable the startup credentials are sent in the following format
   *{
   *  correo: string,
   *  clave: string
   *}
   */
  logIn(form:any){
    this.login.post(form).subscribe(
      data=>{
        let response:any = data;
        Swal.fire({
          icon:"success",
          text: response['detailed'],
          timer:2000,
          position:"top-right"
        })
        this.router.navigate(['/peliculas']);
      },
      error=>{
        Swal.fire({
          icon:"error",
          text: "Error al ingresar",
          timer:2000,
          position:"top-right"
        })
      }
    )
  }   

}
