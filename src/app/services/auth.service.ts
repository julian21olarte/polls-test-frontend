import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
    private user: Subject<any>;
    private apiUrl: string;
    constructor(private http: Http, private cookieService: CookieService) {
        this.apiUrl = 'http://localhost:3000/';
        this.user = new Subject();
    }

    public login(login_user: any) {
        return this.http.post(this.apiUrl + 'auth/login', login_user, { withCredentials: true })
            .map(user => {
                user = user.json();
                const expireDate = new Date();
                expireDate.setDate(expireDate.getDate() + 1);
                this.cookieService.set('currentUser', JSON.stringify(user), expireDate);
                this.user.next(user);
            });
    }

    public logout() {
        return this.http.post(this.apiUrl + 'auth/logout', {}, { withCredentials: true })
            .map(resp => {
                this.cookieService.delete('currentUser');
                this.user.next();
            });
    }

    public existUserLogged(): Boolean {
        return this.cookieService.check('currentUser')
        ? JSON.parse(this.cookieService.get('currentUser'))
        : false;
    }

    public getCurrentUser(): Observable<any> {
        return this.user.asObservable();
    }
}
