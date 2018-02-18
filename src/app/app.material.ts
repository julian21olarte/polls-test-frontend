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
  MatRadioModule,
  MatTabsModule
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
    MatRadioModule,
    MatTabsModule
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
    MatRadioModule,
    MatTabsModule
  ],
})
export class MaterialModule { }
