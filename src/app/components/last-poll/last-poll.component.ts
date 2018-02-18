import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Component, OnInit, ViewEncapsulation, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PollService } from '../../services/poll.service';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-last-poll',
  templateUrl: './last-poll.component.html',
  styleUrls: ['./last-poll.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LastPollComponent implements OnInit {

  private lastPoll: any;
  private questionsAnswers: Array<any>;
  private swiperConfig: any;
  private indexSwiper: number;

  constructor(
    private pollService: PollService,
    private router: Router,
    private renderer: Renderer2,
    private elementRef: ElementRef) {

    // Swiper config
    this.swiperConfig = {
      direction: 'horizontal',
      slidesPerView: 1,
      observer: true,
      keyboard: true,
      mousewheel: true,
      scrollbar: false,
      navigation: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        hideOnClick: false
      }
    };
    this.indexSwiper = 0;
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
      });
  }

  public answerPoll(): void {
    const questions: Array<any> = this.lastPoll.questions;
    if (questions.every(question => question.answer)) {
      this.pollService.replyPoll(this.lastPoll)
      .subscribe(response => {
        if (response) {
          this.router.navigate(['/']);
        }
      });
    } else {
      alert('Debes contestar todas las preguntas!');
    }
  }


  public getQuestion(questionId: any): void {
    return this.lastPoll.questions.filter(question => question.id === questionId);
  }

  public nextQuestion() {
    if (this.indexSwiper < this.lastPoll.questions.length - 1) {
      this.indexSwiper += 1;
    }
  }
  public prevQuestion() {
    console.log(this.indexSwiper);
    if (this.indexSwiper) {
      this.indexSwiper -= 1;
    }
  }

  public checkResponse() {
    const index = this.indexSwiper;
    if (!this.lastPoll.questions[index].answer) {
      const dot = this.elementRef.nativeElement.querySelectorAll('.swiper-pagination-bullet')[index];
      this.renderer.addClass(dot, 'answered');
    }
  }

}
