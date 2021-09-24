import { Component, OnInit } from '@angular/core';
import { CatalogoServiceService } from '../services/catalogo-service.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  peliculas:any = [];

  constructor(private catalogoService:CatalogoServiceService) { }


  ngOnInit(): void {
    this.getCatalogo();
  }

  /**
   * This method obtains the list of the information to be later shown in the catalog
   */
  getCatalogo(){
    this.catalogoService.get().subscribe({
      next: (value) => {
        this.peliculas = value;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
