import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    name: string;
    email: string;
    password: string;
    errorMessage: string;
    loginUI = true;
    signUpUI = false;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.errorMessage = '';
        if (this.authService.isLogged()) {
            this.navigateTo();
        }
    }

    public async login(email: string, password: string) {
        try {
            const url = (await this.authService.login(
                email,
                password,
            )) as string;
            this.navigateTo(url);
        } catch (e) {
            this.errorMessage = 'Wrong Credentials!';
            console.error('Unable to Login!\n', e);
        }
    }

    public async signup(name: string, email: string, password: string) {
        try {
            
            const response = (await this.authService.signup(
                name,
                email,
                password,
            ))as string;
            this.changeToLoginUI();            
        } catch (e) {
            this.errorMessage = 'Something Went Wrong!';
            console.error('Unable to Signup!\n', e);
        }
    }

    public navigateTo(url?: string) {
        url = url || 'nav';
        this.router.navigate([url], { replaceUrl: true });
    }

    changeToSignupUi() {
        this.loginUI = false;
        this.signUpUI = true;
    }

    changeToLoginUI() {
        this.signUpUI = false;
        this.loginUI = true;
    }
}
