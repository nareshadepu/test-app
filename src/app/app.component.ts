import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(DialogBoxComponent,{
      data:{
        title:'User Table',
        isShowFilter:'true',
        isShowFooter:'false',
        getDataSource:'abcd'
      },
      width: '100%',
      minHeight: 'calc(100vh - 90px)',
      height : 'auto',
      disableClose: true 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
