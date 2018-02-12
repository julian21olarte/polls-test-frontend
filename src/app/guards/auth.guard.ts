import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    private currentUser: any;
    constructor(private authService: AuthService, private router: Router) {
        this.currentUser = this.authService.existUserLogged();
        this.authService.getCurrentUser()
            .subscribe(user => {
                this.currentUser = user;
                this.router.navigate(['/']);
            });
    }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.currentUser) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
