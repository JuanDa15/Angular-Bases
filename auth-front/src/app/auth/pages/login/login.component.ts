import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AUTHService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  login: FormGroup = this.fb.group({
    email: ['j@cosa2.com',[Validators.required,Validators.email]],
    password: ['1245678',[Validators.required,Validators.minLength(6)]] 
  })

  constructor(private fb: FormBuilder,
              private router:Router,
              private authservice:AUTHService) { }

  send(){
    if(this.login.valid){

      this.authservice.login(this.login.value).subscribe({
        next: (value)=>{
          if(value === true){
            this.router.navigateByUrl('/dashboard');
          }else{
            console.log(value);
          }
        },
        error: (err)=>console.log(err)
      })
    }

  }
}
