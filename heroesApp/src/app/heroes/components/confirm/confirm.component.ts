import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../Interfaces/heroe.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [`
    .pop-up{
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
    }

    button{
      margin-bottom: .5rem;
    }
  `]
})
export class ConfirmComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
  }

  delete(){
    this.dialogRef.close(true);
  }

  close(){
    this.dialogRef.close(false);
  }
}
