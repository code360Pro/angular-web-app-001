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
import { roleGuard } from './auth/role.guard';
import { AppRole } from './auth/roles';

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
            {
                path: 'billing',
                component: Billing,
                canActivate: [roleGuard],
                data: { roles: [AppRole.Admin] }
            },
            { path: 'invoice', component: Invoice },
            {
                path: 'reporting',
                component: Reporting,
                canActivate: [roleGuard],
                data: { roles: [AppRole.Admin, AppRole.ReportViewer] }
            },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: 'login' }
];
