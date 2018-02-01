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
    this.authService.getCurrentUser()
      .subscribe(user => {
        this.currentUser = user ? user.json() : user;
        this.router.navigate(['/']);
      });
  }

  public logout() {
    this.authService.logout()
      .subscribe(message => {
        if (message) {
          console.log(message);
          this.router.navigate(['/']);
        }
      });
  }

}
