import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { LayoutComponent } from './layout/layout';
import { Dashboard } from './dashboard/dashboard';
import { Purchase } from './purchase/purchase';
import { Sale } from './sale/sale';
import { Billing } from './billing/billing';
import { Invoice } from './invoice/invoice';
import { Reporting } from './reporting/reporting';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'purchase', component: Purchase },
            { path: 'sale', component: Sale },
            { path: 'billing', component: Billing },
            { path: 'invoice', component: Invoice },
            { path: 'reporting', component: Reporting },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: 'login' }
];
