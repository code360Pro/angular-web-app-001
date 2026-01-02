import { Injectable, signal, computed } from '@angular/core';
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

    // Computed signal for roles
    userRoles = computed(() => {
        const user = this.user();
        if (!user) return [];

        console.log('Auth0 User Profile:', user);

        // Check for standard 'roles' claim
        if (Array.isArray(user.roles)) {
            console.log('Found standard roles:', user.roles);
            return user.roles;
        }

        // Check for namespaced roles (e.g. https://myapp.com/roles)
        // We look for any key that ends in '/roles' and is an array
        const keys = Object.keys(user);
        for (const key of keys) {
            if (key.endsWith('/roles') && Array.isArray(user[key])) {
                console.log(`Found namespaced roles in ${key}:`, user[key]);
                return user[key];
            }
        }

        console.log('No roles found in user profile.');
        return [];
    });

    hasRole(role: string): boolean {
        const roles = this.userRoles();
        return roles.includes(role);
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
