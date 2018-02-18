import { Component, OnInit } from '@angular/core';
import { Poll } from '../../interfaces/poll.interface';
import { PollService } from '../../services/poll.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../interfaces/question.interface';

@Component({
  selector: 'app-edit-poll',
  templateUrl: './edit-poll.component.html',
  styleUrls: ['./edit-poll.component.css']
})
export class EditPollComponent implements OnInit {

  private poll: Poll;
  private pollId: number;
  constructor(private pollService: PollService, private router: Router, private activeRoute: ActivatedRoute) { }

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

  public addQuestionToPoll() {
    const question = {
      description: '',
      answers: []
    };
    this.addAnswerToQuestion(question);
    this.poll.questions.push(question);
  }


  public addAnswerToQuestion(question: Question) {
    question.answers.push({
      description: ''
    });
  }

  public deleteElement(father: Array<any>, element: any) {
    father.splice(father.indexOf(element), 1);
  }

  public savePoll() {
    console.log(this.poll);
    const clearPoll = this.clearPoll(this.poll);
    this.pollService.updatePoll(this.pollId, clearPoll)
      .subscribe(poll => {
        if (poll) {
          this.router.navigate(['/polls']);
        }
      });
  }

  private clearPoll(poll: Poll) {
    poll.questions = poll.questions.filter(question => {
      question.answers = question.answers.filter(answer => {
        return (answer.description && answer.description !== '');
      });
      return question.answers.length;
    });
    return poll;
  }

  public inputClick(question: Question, index: number) {
    if (question.answers.length - 1 === index) {
      this.addAnswerToQuestion(question);
    }
  }

}
