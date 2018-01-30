import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {

    }

    // canActivate(
    //     route: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot
    // ): Observable<boolean> | Promise<boolean> | boolean {

    // }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if(localStorage.getItem("currentUser") === 'null') {
            this.router.navigate(['home']);
            return false;
        }
        else {
            return true;
        }
    }
}