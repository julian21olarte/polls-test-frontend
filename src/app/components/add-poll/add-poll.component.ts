import { Poll } from './../../interfaces/poll.interface';
import { Question } from './../../interfaces/question.interface';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.css']
})
export class AddPollComponent implements OnInit {

  private poll: Poll;

  constructor(private pollService: PollService, private router: Router) {
    this.poll = {
      title: '',
      description: '',
      questions: [
        {
          description: '',
          answers: [
            {
              description: ''
            }
          ]
        }
      ]
    };
  }

  ngOnInit() {
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
    this.pollService.savePoll(this.poll)
      .subscribe(poll => {
        if (poll) {
          console.log(this.poll);
          localStorage.removeItem('lastPoll');
          this.router.navigate(['/polls']);
        }
      });
  }
}
