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
  MatDialogModule,
  MatRadioModule
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
    MatDialogModule,
    MatRadioModule
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
    MatDialogModule,
    MatRadioModule
  ],
})
export class MaterialModule { }
