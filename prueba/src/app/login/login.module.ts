import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginViewComponent } from './login-view/login-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInService } from './services/log-in.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginViewComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    LoginViewComponent
  ],
  providers:[
    LogInService
  ]
})
export class LoginModule { }
