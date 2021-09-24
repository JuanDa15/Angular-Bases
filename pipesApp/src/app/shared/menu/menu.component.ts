import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];

  constructor(){}

  ngOnInit() {
    this.items = [
      {
        label: 'PIPES',
        icon: PrimeIcons.DESKTOP,
        items: [
          {
            label: 'Text and Dates',
            icon: PrimeIcons.ALIGN_LEFT,
            routerLink: ' '
          },
          {
            label: 'Numbers',
            icon: PrimeIcons.DOLLAR,
            routerLink: 'numbers'
          },
          {
            label: 'Others',
            icon: PrimeIcons.GLOBE,
            routerLink: 'not_commons'
          }
        ]
      },
      {
        label: 'Personalized',
        icon: PrimeIcons.COG,
        routerLink: 'order'
      }
    ];
  }
}
