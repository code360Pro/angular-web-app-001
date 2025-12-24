import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // Use signal for reactive state, initialize from localStorage if available
    isLoggedIn = signal<boolean>(!!localStorage.getItem('token'));

    constructor(private router: Router) { }

    login() {
        localStorage.setItem('token', 'mock-token');
        this.isLoggedIn.set(true);
        this.router.navigate(['/dashboard']);
    }

    logout() {
        localStorage.removeItem('token');
        this.isLoggedIn.set(false);
        this.router.navigate(['/login']);
    }
}
