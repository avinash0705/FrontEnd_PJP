import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { StorageKey } from 'src/app/core/services/storage/storage.model';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { UserService } from 'src/app/core/services/user/user.service';
const { USER } = StorageKey;
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    providers: [NgxSpinnerService]
})
export class HomePageComponent implements OnInit {

    user: any;
    userInventories =[];
    isLoading =true;
    showInventory: boolean =false;
    inventory :any;


    constructor(private storage : StorageService, private userService: UserService, private router: Router, private SpinnerService: NgxSpinnerService) {}



    ngOnInit() {
        this.SpinnerService.show();
        this.isLoading = true;
        
        this.user = this.storage.read(USER);
        // this.userInventories  = this.userService.getInventories();


        this.userInventories = [
            {id:'PC01',name : 'Stationary', type: 'student products', products : ['Cello pen', 'spiral notebook','eraser']},
            {id:'rdC01',name : 'Sports', type: 'student products', products : ['football', 'bat', 'volleyball']},
            {id:'WWC01',name : 'General', type: 'daily products', products : ['general product 1','gen product 2']},
            {id:'ETC01',name : 'Stationary', type: 'student products', products : ['Cello pen', 'spiral notebook','eraser']},
            {id:'EWC01',name : 'Sports', type: 'student products', products : ['football', 'bat', 'volleyball']},
            {id:'PC01',name : 'General', type: 'daily products', products : ['general product 1','gen product 2']},
            {id:'PC01',name : 'Stationary', type: 'student products', products : ['Cello pen', 'spiral notebook','eraser']},
            {id:'PC01',name : 'Sports', type: 'student products', products : ['football', 'bat', 'volleyball']},
            {id:'PC01',name : 'General', type: 'daily products', products : ['general product 1','gen product 2']},
        ]

        setTimeout(() => {
            this.isLoading = false;
          },2000);
        console.log('inventories', this.userInventories);
        
    
    }

    openInventory(inventory : any){

        this.inventory = inventory;
        this.showInventory = true;



        console.log('navigate to inventory');
       // this.router.navigate(['nav/home/inventory',id]);
    }
}
