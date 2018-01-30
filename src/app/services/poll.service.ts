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
    return this.http.get(this.apiUrl + 'poll/', {withCredentials: true});
  }

  public savePoll(poll: any) {
    return this.http.post(this.apiUrl + 'poll/save', poll, {withCredentials: true});
  }

  public getLastPoll() {
    return this.http.get(this.apiUrl + 'poll/last/', {withCredentials: true});
  }

  public setcurrentLastPoll(poll: any) {
    this.lastPoll.next(poll);
  }

  public getCurrentLastPoll() {
    return this.lastPoll;
  }

  public replyPoll(poll: any) {
    return this.http.post(this.apiUrl + 'poll/reply', poll, {withCredentials: true});
  }


  public lastPollWasReply(lastPollId: number) {
    let item = localStorage.getItem(`lastPoll`);
    return item && (Number(item) === lastPollId);
  }

}
