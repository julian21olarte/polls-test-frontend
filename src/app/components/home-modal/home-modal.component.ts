import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.css']
})
export class HomeModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<HomeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public close() {
    this.dialogRef.close();
  }

  public accept(lastPoll) {
    this.dialogRef.close();
    this.router.navigate(['/lastPoll']);
  }

}
