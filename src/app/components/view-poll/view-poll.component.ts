import { Poll } from './../../interfaces/poll.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PollService } from '../../services/poll.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-poll',
  templateUrl: './view-poll.component.html',
  styleUrls: ['./view-poll.component.css']
})
export class ViewPollComponent implements OnInit {

  private lastPoll: any;
  private questionsAnswers: Array<any>;
  private pollId: number;
  private poll: Poll;
  constructor(
    private pollService: PollService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activeRoute.queryParams
    .subscribe(params => {
      this.pollId = params.id;
      if (!this.pollId) {
        this.router.navigate(['/']);
        return false;
      }
      this.pollService.getPoll(this.pollId)
      .subscribe(poll => {
        this.poll = poll.json();
      });
    });
  }

}
