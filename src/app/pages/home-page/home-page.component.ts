import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    displayedColumns:any;
    dataSource:any;
    isLoading =true;
    showInventory: boolean =false;
    inventory :any;
    newInventoryName='';
    newInventoryType='';

    constructor(private storage : StorageService, private userService: UserService, private router: Router) {}



    ngOnInit() {
        this.isLoading = true;
        
        this.user = this.storage.read(USER);
        // this.userInventories  = this.userService.getInventories();


        this.userInventories = [
            {id:'PC01',name : 'Stationary', type: 'student products', products : [{id:'001',name:'Cello pen'},{id:'002',name: 'spiral notebook'}]},
            {id:'rdC01',name : 'Sports', type: 'student products', products : [{id:'005', name:'football'}, {id:'00332',name:'volleyball'}]},
            {id:'WWC01',name : 'General', type: 'daily products', products : [{id:'0098',name:'general product 1'},{id:'00873',name:'gen product 2'}]},
               
    
         
        ]

        setTimeout(() => {
            this.isLoading = false;
          },2000);
        console.log('inventories', this.userInventories);

        this.displayedColumns = ['id', 'name'];
        
    
    }

    openInventory(inventory : any){

        this.inventory = inventory;
        this.showInventory = true;



        console.log('navigate to inventory');
       // this.router.navigate(['nav/home/inventory',id]);
    }


    deleteInventory(inventory :any)
    {
        if(!window.confirm('All the products inside the inventory will be deleted!, Proceed??'))
        return;

        var invIdx = this.userInventories.findIndex(inv => inv.id === inventory.id);

        this.userInventories.splice(invIdx,1);


    }

    resetField()
    {
        this.newInventoryName = '';
        this.newInventoryType = '';
    }

    save()
    {
        this.userInventories.push({'id':'PC'+this.userInventories.length.toString(), name:this.newInventoryName, type: this.newInventoryType, products : []});
    }
}
