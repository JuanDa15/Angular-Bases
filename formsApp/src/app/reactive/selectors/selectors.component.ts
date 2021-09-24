import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { Countries } from '../interfaces/countries.interface';
import { Country } from '../interfaces/country.interface';
import { SelectorsService } from '../services/selectors.service';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss']
})
export class SelectorsComponent implements OnInit {

  regiones:string[] = [];
  paises: Countries[] = [];
  fronteras: any = [];

  cargando:boolean = false;
  
  selectorForm: FormGroup = this.fb.group({
    continente: ['',Validators.required],
    pais:       ['',Validators.required],
    frontera:   ['',Validators.required]
  })

  constructor(private fb:FormBuilder,
              private ss:SelectorsService) { }

  ngOnInit(): void {
    this.regiones = this.ss.regions;
    this.selectorForm.get('pais')?.disable();
    this.selectorForm.get('frontera')?.disable();

    // Cambiar los paises segun la región
    this.selectorForm.get('continente')?.valueChanges.pipe(
      tap( ( _ ) => {
        this.selectorForm.get('pais')?.reset('');
        this.selectorForm.get('pais')?.enable();
        this.selectorForm.get('frontera')?.disable();
        this.cargando = true;
      }),
      switchMap( region => this.ss.getCountries(region))
    )
    .subscribe( paises => {
      this.cargando = false;
      this.paises = paises;
    });

    // Cambiar las fronteras

    this.selectorForm.get('pais')?.valueChanges.
      pipe(
        tap( ( _ )=> {
          this.selectorForm.get('frontera')?.reset('');
          this.selectorForm.get('frontera')?.enable();
          this.cargando = true;
        }),
        switchMap( code => this.ss.getFrontiers(code)),
        switchMap( pais => this.ss.getPaises(pais?.borders!)))
      .subscribe( paises => {
        this.cargando = false;
        this.fronteras = paises;
      })

  }


  save(){

  }
}
