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

    rightPanel = false;

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
            ));
            console.log('repsonse is', response);
            if(response.success!=undefined) {
            this.changeUiPanel();
            }            
        } catch (e) {

            this.errorMessage = e.error.message;
            console.error('Unable to Signup!\n', e);
        }
    }

    public navigateTo(url?: string) {
        url = url || 'nav';
        this.router.navigate([url], { replaceUrl: true });
    }

    changeUiPanel()
    {
        this.rightPanel = !this.rightPanel;
        this.errorMessage = '';
    }
}
