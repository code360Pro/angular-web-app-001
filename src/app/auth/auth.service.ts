import { Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // Expose Auth0's isAuthenticated$ as a signal
    isAuthenticated: any;

    // Expose user profile
    user$: any;
    user: any;

    constructor(private auth0: Auth0Service) {
        this.isAuthenticated = toSignal(this.auth0.isAuthenticated$, { initialValue: false });
        this.user$ = this.auth0.user$;
        this.user = toSignal(this.user$);
    }

    login() {
        this.auth0.loginWithRedirect();
    }

    logout() {
        this.auth0.logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        });
    }
}
