import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
    selector: 'app-user-login',
    standalone: true,
    imports: [],
    template: `
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
        <span class="d-none d-sm-inline mx-1">User</span>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#" (click)="logout($event)">Sign out</a></li>
      </ul>
    </div>
  `,
    styles: []
})
export class UserLoginComponent {
    constructor(private authService: AuthService) { }

    logout(event: Event) {
        event.preventDefault();
        this.authService.logout();
    }
}
