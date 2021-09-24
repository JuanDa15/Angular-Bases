import { Component, OnInit } from '@angular/core';


interface linkItem{
  title: string,
  link: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  templateLinks: linkItem[] = [
    {
      title: 'basicos',
      link: './template/basicos'
    },
    {
      title: 'dinamicos',
      link: './template/dinamicos'
    },
    {
      title: 'switches',
      link: './template/switches'
    }
  ]

  reactiveLinks: linkItem[] = [
    {
      title: 'basicos',
      link: './reactive/basicos'
    },
    {
      title: 'dinamicos',
      link: './reactive/dinamicos'
    },
    {
      title: 'switches',
      link: './reactive/switches'
    },
    {
      title: 'selectors',
      link: './reactive/selectors'
    }
  ]

  authMenu: linkItem[] = [
    {
      title: 'login',
      link: './auth/login'
    },
    {
      title: 'register',
      link: './auth/register'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
