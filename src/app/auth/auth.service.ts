import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from '../core/services/http/crud.service';
import { StorageKey } from '../core/services/storage/storage.model';
import { StorageService } from '../core/services/storage/storage.service';
const { AUTH_TOKEN, USER } = StorageKey;

@Injectable({
    providedIn: 'root',
})
@Injectable({
    providedIn: 'root',
})
export class AuthService extends CrudService {
    endpoint = 'auth';
    token: string;
    redirectUrl: string;
    loginUrl: 'login';

    constructor(http: HttpClient, private storage: StorageService) {
        super(http);
        this.token = this.storage.read(AUTH_TOKEN) || '';
    }

    public async login(email: string, password: string) {
        try {
            this.endpoint = 'user/login';
            let response = await this.post({ email, password });
            this.token = response.token;
            console.log('response after log in',response)
            this.storage.save(AUTH_TOKEN, this.token);
            this.storage.save(USER,response.user)
            if(this.isLogged()) {
            this.redirectUrl = 'nav';
            }
            return this.redirectUrl;
        } catch (error) {
            console.error('Error during login request', error);
            return Promise.reject(error);
        }
    }

    public async signup(username: string, email: string, password: string) {
        try {
            this.endpoint = 'user/register';
            let response = await this.post({username, email, password });
            console.log('signup response is',response)
            return response;
        } catch (error) {
            console.error('Error during signup request', error);
            return Promise.reject(error);
        }
    }

    public async mockLogin(email: string, password: string) {
        try {
            if (!(email === 'user' && password === 'user')) {
                throw new Error(
                    'When using mockLogin, login with credentials: \nemail: user\npassword:user',
                );
            }
            this.token = 'user';
            this.storage.save(StorageKey.AUTH_TOKEN, this.token);
            return this.redirectUrl;
        } catch (e) {
            return Promise.reject(e.message);
        }
    }

    public getToken(): string {
        return this.token;
    }

    public logout() {
        this.token = '';
        this.storage.remove(AUTH_TOKEN);
    }

    public isLogged(): boolean {
        return this.token!='';
    }
}
