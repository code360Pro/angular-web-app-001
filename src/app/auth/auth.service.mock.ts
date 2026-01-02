import { signal } from '@angular/core';

export class MockAuthService {
    isAuthenticated = signal(false);
    user = signal<any>(null);
    userRoles = signal<string[]>([]);

    login() { }
    logout() { }
    hasRole(role: string) { return this.userRoles().includes(role); }
}
