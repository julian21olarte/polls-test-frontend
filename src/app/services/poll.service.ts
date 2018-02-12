import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class PollService {
  private apiUrl: string;
  private lastPoll: Subject<any>;
  constructor(private http: Http, private cookieService: CookieService) {
    this.apiUrl = 'http://localhost:3000/';
    this.lastPoll = new Subject();
  }


  public getPolls() {
    return this.http.get(this.apiUrl + 'poll/', { withCredentials: true });
  }

  public savePoll(poll: any) {
    return this.http.post(this.apiUrl + 'poll/save', poll, { withCredentials: true })
      .map(newPoll => {
        this.cookieService.delete('lastPoll');
        return newPoll.json();
      });
  }

  public getLastPoll() {
    return this.http.get(this.apiUrl + 'poll/last/', { withCredentials: true });
  }

  public setcurrentLastPoll(poll: any) {
    this.lastPoll.next(poll);
  }

  public getCurrentLastPoll() {
    return this.lastPoll;
  }

  public replyPoll(poll: any) {
    return this.http.post(this.apiUrl + 'poll/reply', poll, { withCredentials: true })
    .map(response => {
      const item = btoa(poll.id);
      const expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 1);
      this.cookieService.set('lastPoll', item, expireDate);
      return response.json();
    });
  }

  public lastPollWasReply(lastPollId: number) {
    // const item = localStorage.getItem(`lastPoll`);
    const item = atob(this.cookieService.get('lastPoll'));
    return item && (Number(item) === lastPollId);
  }

  public getPoll(pollId: number) {
    return this.http.get(this.apiUrl + 'poll/' + pollId, { withCredentials: true });
  }

  public getPollResponses(pollId: number) {
    return this.http.get(this.apiUrl + 'poll/responses/' + pollId, { withCredentials: true })
    .map(resp => {
      const responses: Array<any> = resp.json();
      const arrayResponses = {};
      responses.map(response => {
        if ( !arrayResponses[response.sessionId]) {
          arrayResponses[response.sessionId] = [];
        }
        arrayResponses[response.sessionId].push(response);
      });
      return arrayResponses;
    });
  }

}
