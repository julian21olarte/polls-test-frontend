import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private currentUser: any;
  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.getCurrentUser()
      .subscribe(user => {
        this.currentUser = user;
      });
  }

  public logout() {
    this.authService.logout()
      .subscribe(message => {
        if (message) {
          console.log(message);
          this.authService.setCurrentUser(null);
        }
      });
  }

}
