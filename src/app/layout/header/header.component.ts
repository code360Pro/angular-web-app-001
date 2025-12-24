import { Component } from '@angular/core';
import { UserLoginComponent } from './user-login/user-login.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [UserLoginComponent],
    template: `
    <header class="p-3 bg-dark text-white border-bottom">
      <div class="container-fluid">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <span class="fs-4">ERP System</span>
          </a>

          <div class="text-end">
            <app-user-login></app-user-login>
          </div>
        </div>
      </div>
    </header>
  `,
    styles: []
})
export class HeaderComponent { }
