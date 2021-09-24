import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AUTHService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  get user(){
    return this.authservice.user;
  }

  constructor(private router:Router,
              private authservice:AUTHService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }
}
