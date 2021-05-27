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

        this.userService.getInventories().then( value => {
            console.log('recieved value invetnory is', value)
            this.userInventories = value;
            this.isLoading = false;

        }, error => {
            console.log(error);
            this.isLoading = false;

        });


        

        setTimeout(() => {
            this.isLoading = false;
          },3000);
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

        let id = this.userInventories[invIdx]._id;

        this.isLoading = true;
        this.userService.deleteInventory(id).then(value => 
            {console.log('inventory delete is', value);this.ngOnInit();this.isLoading = false},error => {
            this.isLoading =false;
        })


    }

    resetField()
    {
        this.newInventoryName = '';
        this.newInventoryType = '';
    }

    save()
    {
        //this.userInventories.push({id:'PC'+this.userInventories.length.toString(), name:this.newInventoryName, type: this.newInventoryType, products : []});
        this.isLoading = true;
        let data = {
            name : this.newInventoryName,
            type : this.newInventoryType
        }
        this.userService.addInventory(data).then(value => {console.log('added data is',value);
        this.userService.getInventoryById(value.id).then(res => {
            this.userInventories.push(res);
        }) 
        this.isLoading = false;},error => {console.log(error); this.isLoading = false;});
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
                    this.addNewProduct(data.data.name, data.data.description,data.data.quantity,data.data.price);
            }
            console.log("Dialog output:", data)
        }
        
        );    
    }

    addNewProduct(name:String, description:String,quantity : number, price : string)
    {    
        console.log('data receinved is', name)
        //this.inventory.products.push({id: 'PC00'+(this.inventory.products.length + 1).toString(), name:name, description:description});

        let data = {
            id : this.inventory['_id'],
            name : name,
            description : description,
            quantity : quantity,
            price : price
        }
        console.log('new product added to backend!!!,',data); /// this will be implemented once backend api will be ready;

        this.isLoading = true;
        this.userService.addProduct(data).then(value => {
            console.log('added product id is', value);

            this.userService.getProductById(value.id).then(value => {
                this.inventory.products.push(value);
                this.isLoading = false;
            },err => {console.log(err);this.isLoading = false});

        });




    }
}
