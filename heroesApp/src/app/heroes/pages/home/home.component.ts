import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/usuario.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  constructor(private router:Router,
              private userService: AuthService){
              }

  ngOnInit(){

  }

  get auth(){
    return this.userService.auth;
  }


  onLogout(){
    this.userService.logOut();
    this.router.navigate(['auth/login']);
  }

}
