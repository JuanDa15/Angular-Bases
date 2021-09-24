import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterViewComponent } from './register-view/register-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterViewComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    RegisterViewComponent
  ],
  providers:[
  ]
})
export class RegisterModule { }
