import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,


    CanActivate,
    Router, RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (this.authService.isLogged()) {
            this.authService.redirectUrl = null;
            return true;
        }
        console.log('not logged in')
        this.authService.redirectUrl = state.url;
        this.router.navigate(['']);
        return false;
    }
}
