import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HeroModel } from 'src/app/models/heroe.model';
import { CreateHeroService } from 'src/app/services/create-hero.service';
import { GetHeroeService } from 'src/app/services/get-heroe.service';
import { UpdateHeroService } from 'src/app/services/update-hero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  hero:HeroModel = new HeroModel();

  constructor(private createService:CreateHeroService,
              private updateService:UpdateHeroService,
              private getService:GetHeroeService,
              private ar:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap( ({id}) => {
        this.hero.id = id;
        return this.getService.getHero(id)
      })
    ).subscribe({
      next: (val:HeroModel) => {
        this.hero = { id: this.hero?.id, ...val}
      },
      error: (err:any) => {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: err,
          position: 'center'
        })
      }
    })
  }

  save(form:NgForm):void{
    if(form.invalid){
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: 'Invalid Form',
        position: 'top-right'
      })
    }else{
      Swal.fire({
        title: 'Wait',
        text: 'Saving information',
        icon: 'info',
        allowOutsideClick: false
      })
      Swal.showLoading();

      let peticion: Observable<any>;
      let redirect:boolean;

      if(!this.hero.id){
        peticion = this.createService.createHero(this.hero);
        redirect = true;
      }else{
        peticion = this.updateService.updateHero(this.hero);
      }

      peticion.subscribe({
        next: (val:any) => {
          Swal.fire({
            title: this.hero.name,
            icon: 'success',
            text: 'Successfully updated',
            position: 'center'
          })
          if(redirect){
            this.router.navigate(['/heroe',this.hero.id]);
          }
        },
        error: (err:any) => {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: err,
            position: 'center'
          })
        }
      })
    }
  }
}
