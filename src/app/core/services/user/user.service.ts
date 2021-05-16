import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageKey } from 'src/app/core/services/storage/storage.model';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { CrudService } from '../http/crud.service';
const { AUTH_TOKEN,USER } = StorageKey;

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService {
  endpoint: any;
  token: string;
  user: any;

  constructor(http: HttpClient, private storage: StorageService) {
    super(http);
    this.user = this.storage.read(USER);
    this.token = this.storage.read(AUTH_TOKEN) 
  }

  public async getInventories() {
    try {
        this.endpoint = 'inventory';
        var response = await this.getList();
       
        return response;
    } catch (error) {
        console.error('Error during login request', error);
        return Promise.reject(error);
    }
}


}
