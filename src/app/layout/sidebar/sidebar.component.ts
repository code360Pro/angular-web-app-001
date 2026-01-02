import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { AppRole } from '../../auth/roles';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100" id="menu">
        <li class="nav-item w-100">
          <a routerLink="/dashboard" routerLinkActive="active" class="nav-link align-middle px-0 text-white">
            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span>
          </a>
        </li>
        <li class="w-100">
          <a routerLink="/purchase" routerLinkActive="active" class="nav-link px-0 align-middle text-white">
            <i class="fs-4 bi-cart"></i> <span class="ms-1 d-none d-sm-inline">Purchase</span>
          </a>
        </li>
        <li class="w-100">
          <a routerLink="/sale" routerLinkActive="active" class="nav-link px-0 align-middle text-white">
            <i class="fs-4 bi-currency-dollar"></i> <span class="ms-1 d-none d-sm-inline">Sale</span>
          </a>
        </li>
        @if (auth.hasRole(Roles.Admin)) {
        <li class="w-100">
          <a routerLink="/billing" routerLinkActive="active" class="nav-link px-0 align-middle text-white">
            <i class="fs-4 bi-receipt"></i> <span class="ms-1 d-none d-sm-inline">Billing</span>
          </a>
        </li>
        }
        <li class="w-100">
          <a routerLink="/invoice" routerLinkActive="active" class="nav-link px-0 align-middle text-white">
            <i class="fs-4 bi-file-earmark-text"></i> <span class="ms-1 d-none d-sm-inline">Invoice</span>
          </a>
        </li>
        @if (auth.hasRole(Roles.Admin) || auth.hasRole(Roles.ReportViewer)) {
        <li class="w-100">
          <a routerLink="/reporting" routerLinkActive="active" class="nav-link px-0 align-middle text-white">
            <i class="fs-4 bi-graph-up"></i> <span class="ms-1 d-none d-sm-inline">Reporting</span>
          </a>
        </li>
        }
      </ul>
    </div>
  `,
  styles: []
})
export class SidebarComponent {
  auth = inject(AuthService);
  Roles = AppRole;
}

