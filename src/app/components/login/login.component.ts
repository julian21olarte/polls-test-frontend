import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private hide: boolean;
  private userLogin: {
    username: string,
    password: string
  };
  constructor(private authService: AuthService, private router: Router) {
    this.hide = true;
    this.userLogin = {username: '', password: ''};
  }

  ngOnInit() {
  }

  public login() {
    this.authService.login(this.userLogin)
      .subscribe(userLogged => {
        userLogged = userLogged.json().user;
        if (userLogged) {
          this.authService.setCurrentUser(userLogged);
          this.router.navigate(['home']);
        }
      });
  }

}
