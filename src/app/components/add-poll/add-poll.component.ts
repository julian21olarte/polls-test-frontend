import { Answer } from './../../interfaces/answer.interface';
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
    const clearPoll = this.clearPoll(this.poll);
    this.pollService.savePoll(clearPoll)
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
