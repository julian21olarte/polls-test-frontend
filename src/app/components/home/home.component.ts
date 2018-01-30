import { PollService } from './../../services/poll.service';
import { AuthService } from './../../services/auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { HomeModalComponent } from '../home-modal/home-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private lastPoll: any;
  private currentUser: any;

  constructor(
    private authService: AuthService,
    private pollService: PollService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log('load home component');
    this.pollService.getLastPoll()
      .subscribe(lastPoll => {
        if (lastPoll) {
          this.lastPoll = lastPoll.json();
          this.pollService.setcurrentLastPoll(this.lastPoll);
          console.log(localStorage.getItem('lastPoll'));
          console.log(this.lastPoll.id);
          console.log(this.pollService.lastPollWasReply(this.lastPoll.id));
          if (!this.pollService.lastPollWasReply(this.lastPoll.id)) {
            this.openDialog();
          }
        }
      });
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(HomeModalComponent, {
      width: '350px',
      data: { lastPoll: this.lastPoll }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
