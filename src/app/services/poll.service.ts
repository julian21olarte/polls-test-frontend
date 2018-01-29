import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PollService {
  private apiUrl: string;
  private lastPoll: Subject<any>;
  constructor(private http: Http) {
    this.apiUrl = 'http://localhost:3000/';
    this.lastPoll = new Subject();
  }


  public getPolls() {
    return this.http.get(this.apiUrl + 'poll/');
  }

  public savePoll(poll: any) {
    return this.http.post(this.apiUrl + 'poll/save', poll);
  }

  public getLastPoll() {
    return this.http.get(this.apiUrl + 'poll/last/');
  }

  public setcurrentLastPoll(poll: any) {
    this.lastPoll.next(poll);
  }

  public getCurrentLastPoll() {
    return this.lastPoll;
  }

  public replyPoll(poll: any) {
    return this.http.post(this.apiUrl + 'poll/reply', poll);
  }

}
