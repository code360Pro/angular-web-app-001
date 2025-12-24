import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  onLogin(event: Event) {
    event.preventDefault();
    this.authService.login();
  }
}
