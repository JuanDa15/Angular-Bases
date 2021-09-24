import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private router:Router, private loginService: AuthService) { }

  onLogin(){

    this.loginService.login()
      .subscribe({
        next: value => {
          if(value.id){
            this.router.navigate(['/heroes/list']);
          }
        },
        error: ()=> console.log('user does not exist')
      })

  }
}
