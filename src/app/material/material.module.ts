import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponenets = [
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule,
  MatIconModule
]

@NgModule({
  imports: [MaterialComponenets],
  exports: [MaterialComponenets]
})
export class MaterialModule { }
