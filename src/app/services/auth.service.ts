import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
    private user: Subject<any>;
    private apiUrl: string;
    constructor(private http: Http) {
        this.apiUrl = 'http://localhost:3000/';
        this.user = new Subject();
    }

    public login(login_user: any) {
        return this.http.post(this.apiUrl + 'auth/login', login_user, {withCredentials: true});
    }

    public logout() {
        localStorage.removeItem('currentUser');
        return this.http.post(this.apiUrl + 'auth/logout', {}, {withCredentials: true});
    }

    public getCurrentUser(): Observable<any> {
        return this.user.asObservable();
    }

    public setCurrentUser(newUser: any) {
        localStorage.setItem('currentUser', newUser);
        this.user.next(newUser);
    }
}