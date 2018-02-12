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
  private lastPollResponses: {
    [sessionId: string]: Array<any>;
  };
  private numberOfLastPollResponses: number;

  // chart vars
  public chartDataType: string;

  constructor(
    private authService: AuthService,
    private pollService: PollService,
    public dialog: MatDialog) {
    this.chartDataType = 'doughnut';
    console.log('load home component');
    this.pollService.getLastPoll()
      .subscribe(lastPoll => {
        if (lastPoll) {
          this.lastPoll = lastPoll.json();
          this.pollService.setcurrentLastPoll(this.lastPoll);
          if (!this.pollService.lastPollWasReply(this.lastPoll.id)) {
            this.openDialog();
          }

          this.pollService.getPollResponses(this.lastPoll.id)
            .subscribe(responses => {
              if (responses) {
                this.lastPollResponses = responses;
                this.numberOfLastPollResponses = Object.keys(this.lastPollResponses).length;
              }
            });
        }
      });

  }

  ngOnInit() {
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


  public getLabels(question: any): Array<string> {
    return question.answers.map(answer => answer.description);
  }

  public getChartData(question: any): Array<number> {
    const countDuplicates = (array: Array<number>, value: number) => {
      let count = 0;
      array.map(number => count += number === value ? 1 : 0);
      return count;
    };
    const questionArray = Object.values(this.lastPollResponses)
      .map(responses => {
      return responses.filter(resp => resp.questionId === question.id)[0].answerId;
    });

    return question.answers.map(answer => {
      return countDuplicates(questionArray, answer.id);
    });
  }

}
