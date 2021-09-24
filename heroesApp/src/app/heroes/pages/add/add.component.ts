import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { Heroe, Publisher } from '../../Interfaces/heroe.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    .full-width{
      width: 100%;
    }

    .spacer{
      width: 2rem;
    }

    img{
      width: 100%;
      max-width: 335px;
    }

    button{
      margin-right:.5rem;
      max-height: 42px;
    }
    
    .hide{
      display: none;
    }
  `]
})
export class AddComponent implements OnInit {

  tittle:string = "";
  publishers: string[] = ['DC Comics','Marvel Comics'];
  horizontalPosition: MatSnackBarHorizontalPosition ="center";
  verticalPosition: MatSnackBarVerticalPosition = "bottom"

  hero: Heroe = {
    superhero:        '',
    id:               '',
    publisher: Publisher.DCComics,
    alter_ego:        '',
    first_appearance: '',
    characters:       '',
    alt_img:          ''
  }

  constructor(private heroeservice:HeroeService,
              private activatedRoute:ActivatedRoute,
              private router: Router,
              private snackBar:MatSnackBar,
              public dialog: MatDialog) {}

  ngOnInit(): void {
    if(this.router.url.includes('edit')){
      this.tittle = "Edit Hero";
      this.getURLParams();
    }else{
      this.tittle = "New Hero";
    }
  }

  getURLParams(){
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroeservice.getHeroe(id)))
        .subscribe({
          next: heroe => this.hero = heroe
        });
  }



  saveHero(){
    if(this.hero.id.trim().length != 0){
      // add
      this.heroeservice.updateHeroe(this.hero).subscribe({
        next: () =>  this.openSnackBar('Succesfully Edited', 'close')
      });
    }else{
      // update hero
      if(this.hero.superhero.trim().length !== 0){
        // Assign the id to the created hero
        this.idMapper();

        this.heroeservice.postHeroe(this.hero).subscribe({
          next: hero => {
            this.router.navigate(['heroes/edit',hero.id]);
            this.openSnackBar('Successfully Created', 'close');
          }
        });
      }
    }
  }

  idMapper(){
    if(this.hero.publisher == Publisher.DCComics){
      this.hero.id = `dc-${this.hero.superhero}`;
    }else{
      this.hero.id = `marvel-${this.hero.superhero}`;
    }
  }

  deleteHero(){
    const dialog = this.dialog.open(ConfirmComponent,{
      data: this.hero
    });

    dialog.afterClosed()
      .subscribe({
        next: (value) => {
          if(value){
            this.heroeservice.deleteHeroe(this.hero.id)
              .subscribe({
                next: value =>{
                  this.router.navigate(['/heroes'])
                }
              })
          }
        }
      })
  }
  
  openSnackBar(message:string, action:string){
    this.snackBar.open(message, action, {
      horizontalPosition : this.horizontalPosition,
      verticalPosition : this.verticalPosition,
      duration: 2000
    });
  }
}
