import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { NavRoute } from '../../../nav-routing';
import {
    NavigationService,
    Page
} from '../../services/navigation/navigation.service';
import { StorageKey } from '../../services/storage/storage.model';
import { StorageService } from '../../services/storage/storage.service';
const { AUTH_TOKEN, USER } = StorageKey;
@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    isOpen = true;

    constructor(
        private navigationService: NavigationService,
        private authService: AuthService,
        private router: Router,
        private storage: StorageService
    ) {}

    user: any;
    ngOnInit() {
        this.user = this.storage.read(USER);
        console.log('user in nav compoent', this.user)
    }

    public toggleSideNav() {
        this.isOpen = !this.isOpen;
    }

    public getNavigationItems(): NavRoute[] {
        return this.navigationService.getNavigationItems();
    }

    public getActivePage(): Page {
        return this.navigationService.getActivePage();
    }

    public logout() {
        this.authService.logout();
        this.router.navigate(['login'], { replaceUrl: true });
    }

    public getPreviousUrl(): string[] {
        return this.navigationService.getPreviousUrl();
    }
}
