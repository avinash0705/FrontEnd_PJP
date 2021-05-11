import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateChild,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class NavGuard implements CanActivateChild {

    constructor(private authService: AuthService) {}


    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.isLogged();
      }
}
