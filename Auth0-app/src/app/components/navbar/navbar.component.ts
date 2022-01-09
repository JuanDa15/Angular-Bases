import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .mr-1{
      margin-right: .5rem;
    }  
  `]
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService,
              @Inject(DOCUMENT) public document: Document) { }

  ngOnInit(): void {
  }

}
