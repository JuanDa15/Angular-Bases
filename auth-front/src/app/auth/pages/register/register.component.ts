import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AUTHService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register:FormGroup = this.fb.group({
    name:['juan david',[Validators.required]],
    email:['jdoo1114@gmail.com',[Validators.required,Validators.email]],
    password: ['123456789',[Validators.required]]
  })

  constructor(private fb:FormBuilder,
              private router:Router,
              private authService:AUTHService) { }

  ngOnInit(): void {
  }

  save(){
    if(this.register.valid){
      this.authService.register(this.register.value).subscribe({
        next: value => {
          if(value === true){
            this.router.navigateByUrl('/dashboard');
          }else{
            console.log('te jodes en el registro');
          }
        }
      })

    }
  }

}
