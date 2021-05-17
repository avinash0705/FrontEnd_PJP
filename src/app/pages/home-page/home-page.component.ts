import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { Router } from '@angular/router';
import { StorageKey } from 'src/app/core/services/storage/storage.model';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { AddProductDialogPageComponent } from '../add-product-dialog-page/add-product-dialog-page.component';


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
    showInventory =false;
    inventory :any;
    newInventoryName='';
    newInventoryType='';

    constructor(private storage : StorageService,
                private userService: UserService, 
                private router: Router,
                private dialog: MatDialog) {}



    ngOnInit() {
        this.isLoading = true;
        
        this.user = this.storage.read(USER);
        // this.userInventories  = this.userService.getInventories();


        this.userInventories = [
            {id:'PC01',name : 'Stationary', type: 'student products', 
                products : [{id:'001',name:'Cello pen',type:'type1'},
                            {id:'002',name: 'spiral notebook',type:'type2'}]},
            
            {id:'SCF02',name : 'Sports', type: 'sports products', 
            products : [{id:'001',name:'ball',type:'type1'},
                        {id:'002',name: 'volley ball',type:'type2'}]},

            {id:'23C1',name : 'Stationary', type: 'student products', 
            products : [{id:'001',name:'Cello pen',type:'type1'},
                        {id:'002',name: 'spiral notebook',type:'type2'}]},
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
        if(!window.confirm('All the products inside the inventory will be deleted!, Proceed??')) {
        return;
        }

        const invIdx = this.userInventories.findIndex(inv => inv.id === inventory.id);

        this.userInventories.splice(invIdx,1);


    }

    resetField()
    {
        this.newInventoryName = '';
        this.newInventoryType = '';
    }

    save()
    {
        this.userInventories.push({id:'PC'+this.userInventories.length.toString(), name:this.newInventoryName, type: this.newInventoryType, products : []});
        this.resetField();
    }

    isDisabled()
    {
      return (this.newInventoryName === '' || this.newInventoryType === '');
    }



    openAddProductDialog(inventory:any) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;

        dialogConfig.data = {
            id: 1,
            title: 'Angular For Beginners'
        };

        dialogConfig.position =
        {
            top: '14vw',
            left: '40vw'

        }

        const dialogRef = this.dialog.open(AddProductDialogPageComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(
        data => 
        {
            if(data.data!=undefined)
            {
                    this.addNewProduct(data.data.name, data.data.type);
            }
            console.log("Dialog output:", data)
        }
        
        );    
    }

    addNewProduct(name:String, type:String)
    {   
        this.inventory.products.push({id: 'PC00'+(this.inventory.products.length + 1).toString(), name:name, type:type});
        console.log('new product added to backend!!!'); /// this will be implemented once backend api will be ready;
    }
}
