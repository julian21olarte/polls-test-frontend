import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-last-poll',
  templateUrl: './last-poll.component.html',
  styleUrls: ['./last-poll.component.css']
})
export class LastPollComponent implements OnInit {

  private lastPoll: any;
  private questionsAnswers: Array<any>;
  constructor(private pollService: PollService, private router: Router) {
  }

  ngOnInit() {
    this.pollService.getLastPoll()
      .subscribe(lastPoll => {
        this.lastPoll = lastPoll.json();
        this.questionsAnswers = this.lastPoll.questions.map(question => {
          const newQuestion = Object.assign({}, question);
          delete newQuestion.answers;
          return newQuestion;
        });
        console.log(this.questionsAnswers);
      });
  }

  public answerPoll() {
    this.pollService.replyPoll(this.lastPoll)
      .subscribe(response => {
        if (response) {
          localStorage.setItem('lastPoll', this.lastPoll.id);
          this.router.navigate(['/']);
        }
      });
  }


  public getQuestion(questionId: any) {
    return this.lastPoll.questions.filter(question => question.id === questionId);
  }

}
