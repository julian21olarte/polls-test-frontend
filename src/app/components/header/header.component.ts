import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private currentUser: any;
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.currentUser = this.authService.existUserLogged();
    this.authService.getCurrentUser()
      .subscribe(user => {
        this.currentUser = user;
        this.router.navigate(['/']);
      });
  }

  public logout(): void {
    this.authService.logout()
      .subscribe(message => {
        console.log('LOGOUT');
        delete this.currentUser;
        this.router.navigate(['home']);
      });
  }

}
