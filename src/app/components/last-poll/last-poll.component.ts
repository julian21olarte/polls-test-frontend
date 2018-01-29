import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-last-poll',
  templateUrl: './last-poll.component.html',
  styleUrls: ['./last-poll.component.css']
})
export class LastPollComponent implements OnInit {

  private lastPoll: any;
  constructor(private pollService: PollService) {
    // this.pollService.getLastPoll()
    // .subscribe(lastPoll => {
    //   this.lastPoll = lastPoll.json();
    // });

    this.lastPoll = this.pollService.getCurrentLastPoll();
  }

  ngOnInit() {
  }

}
