import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') form!:NgForm;
  
  message:string;
  error:boolean;
  user:userModel;
  remember:boolean;

  constructor(private authService:AuthService,
              private router:Router){
    this.message = '';
    this.error = false;
    this.user = new userModel();
    this.remember = false;
  }

  ngOnInit() {
    if(localStorage.getItem('email')){
      this.remember = true;
      this.user.email = localStorage.getItem('email');
    }
  }

  login(form:NgForm){
    if(!form.invalid){
      this.authService.signIn(this.user).subscribe({
        next: (data:any) => {
          this.rememberUsername();
          this.error = false;
          this.message = 'Login successfully';
          setTimeout(()=>this.router.navigateByUrl('home'),500);
        },
        error: (err:any) => {
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

  rememberUsername(){
    if(this.remember){
      localStorage.setItem('email',this.user.email);      
    }  
  }

}
