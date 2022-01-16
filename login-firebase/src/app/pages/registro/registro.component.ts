import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { Error } from "src/app/interfaces/error.interface";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @ViewChild('registerForm') form!:NgForm;

  user: userModel;
  message: string;
  error:boolean;

  constructor(private authService:AuthService,
              private router:Router){
    this.message = '';
    this.error = false;
    this.user = new userModel();
  }

  ngOnInit() {
    
  }

  onSubmit( event:NgForm ){
    if(!event.invalid){
      this.authService.signUp(this.user).subscribe({
        next: (data:any) => { 
          if(data){
            this.message = 'Sign up successful';
            this.error = false;
            setTimeout( ()=>{this.router.navigateByUrl('login')},500)
          }

        },
        error: ( err:any ) => { 
          const error:Error = err.error.error;
          this.error = true;
          this.message = error.message;
        }
      })
    }
  }

  invalidField(field:string){
      return  this.form.submitted && this.form.controls[field].errors;
  }

  errorMsg(field:string){
    const errors = this.form.controls[field].errors;

    if(errors.required){
      return `El campo ${field} es requerido`;
    }else if(errors.email){
      return 'No cumple con el formato requerido Ex: cosa@cosa.com'
    }else if(errors.minlength){
      return `La longitud minima es: ${errors.minlength.requiredLength}, la longitud actual es: ${errors.minlength.actualLength}`;
    }else{
      return '';
    }
  }
}
