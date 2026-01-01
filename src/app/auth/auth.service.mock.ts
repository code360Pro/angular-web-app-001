import { signal } from '@angular/core';

export class MockAuthService {
    isAuthenticated = signal(false);
    user = signal<any>(null);

    login() { }
    logout() { }
}
