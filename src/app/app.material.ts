import { NgModule } from '@angular/core';
import {
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatDatepickerModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatDatepickerModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatDatepickerModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule
  ],
})
export class MaterialModule { }
