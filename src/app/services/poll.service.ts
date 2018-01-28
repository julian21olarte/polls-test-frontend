import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PollService {
  private apiUrl: string;
  constructor(private http: Http) {
    this.apiUrl = 'http://localhost:3000/';
  }


  public getPolls() {
    return this.http.get(this.apiUrl + 'poll/');
  }
}
