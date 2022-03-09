import { Component, OnInit } from '@angular/core';
import { HeroModel } from 'src/app/models/heroe.model';
import { DeleteHeroeService } from 'src/app/services/delete-heroe.service';
import { GetHeroesService } from 'src/app/services/get-heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes!:HeroModel[];
  tableHeaders:string[];
  flags:{[s:string]:boolean} = {
    loading:false,
    empty:false
  }
  mapping = {
    'true' : 'Vivo',
    'false' : 'Muerto'
  }

  constructor(private getHeroes:GetHeroesService, public deleteService:DeleteHeroeService) {
    this.flags.loading = false;
    this.tableHeaders  = [
      '#','Name','Power',
      'Is alive','Actions'
    ]
    this.flags.empty = false;
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData():void{
    this.flags.loading = true;
    this.getHeroes.getHeroes().subscribe({
      next: (val:HeroModel[]) => {
        this.flags.loading = false;
        if(val.length === 0){
          this.flags.empty = true;
        }else{
          this.heroes = val;
          this.flags.empty = false;
        }
      },
      error: (err:any) => console.log(err)
    })
  }

  deleteHero(id:string):void{
    this.deleteService.deleteHero(id).subscribe({
      next:(val:any) => {
        Swal.fire({
          title: 'Deleted',
          icon: 'success',
          text: 'Successfully deleted',
          position: 'center'
        })
        this.fetchData();
      },
      error:(err:any) => {
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
