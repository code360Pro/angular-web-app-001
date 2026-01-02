import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AppRole } from './roles';

export const roleGuard: CanActivateFn = (route, state) => {
    const auth = inject(AuthService);
    const router = inject(Router);

    const requiredRoles = route.data['roles'] as Array<AppRole>;

    if (!requiredRoles || requiredRoles.length === 0) {
        return true;
    }

    // If we are not authenticated, we should probably let the Auth0 guard handle it first
    // But strictly checking, if we don't have roles, we return false.
    // Assuming this guard is used in conjunction with authGuard or separate logic.

    if (!auth.isAuthenticated()) {
        // If used without authGuard, redirect to login might be needed, 
        // but usually we chain guards: [authGuard, roleGuard]
        // or we can trigger login here
        auth.login();
        return false;
    }

    const userRoles = auth.userRoles();
    const hasRequiredRole = requiredRoles.some(role => userRoles.includes(role));

    if (hasRequiredRole) {
        return true;
    }

    // Redirect to unauthorized page or root
    // For now, redirect to root
    console.warn('User missing required roles:', requiredRoles);
    return router.parseUrl('/');
};
