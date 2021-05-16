import { Component, OnInit } from '@angular/core';
import { StorageKey } from 'src/app/core/services/storage/storage.model';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { UserService } from 'src/app/core/services/user/user.service';
const { USER } = StorageKey;
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

    user: any;
    userInventories =[];


    constructor(private storage : StorageService, private userService: UserService) {}



    ngOnInit() {
        this.user = this.storage.read(USER);
        //this.userInventories  = this.userService.getInventories();


        this.userInventories = [
            {'name' : 'Stationary', 'type': 'student products', products : ['Cello pen', 'spiral notebook','eraser']},
            {'name' : 'Sports', 'type': 'student products', products : ['football', 'bat', 'volleyball']},
            {'name' : 'General', 'type': 'daily products', products : ['general product 1','gen product 2']},
            {'name' : 'Stationary', 'type': 'student products', products : ['Cello pen', 'spiral notebook','eraser']},
            {'name' : 'Sports', 'type': 'student products', products : ['football', 'bat', 'volleyball']},
            {'name' : 'General', 'type': 'daily products', products : ['general product 1','gen product 2']},
            {'name' : 'Stationary', 'type': 'student products', products : ['Cello pen', 'spiral notebook','eraser']},
            {'name' : 'Sports', 'type': 'student products', products : ['football', 'bat', 'volleyball']},
            {'name' : 'General', 'type': 'daily products', products : ['general product 1','gen product 2']},
        ]
        console.log('inventories', this.userInventories);
    
    }
}
