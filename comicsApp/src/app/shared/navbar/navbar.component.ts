import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  value:string = '';

  @ViewChild('searchbar') searchBar!:ElementRef<HTMLInputElement>;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  search(){
    this.value = this.searchBar.nativeElement.value;

    this.router.navigate(['/search',this.value]);
  }

}
