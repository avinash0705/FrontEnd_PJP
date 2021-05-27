import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';



@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss'],
})
export class InventoryPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private userService:UserService) {
        
   }
  id : any;
  isLoading = false;
  newProductName='';
  @Output() goBackEvent = new EventEmitter<any>();
  @Output() addProductEvent = new EventEmitter<any>();
  @Input() inventory :any;
  ngOnInit() {
    this.isLoading = true; 

    console.log('passed inventory is ', this.inventory)
    this.inventory.products = [];
    this.userService.getProductList().then(value => {
      console.log('all products are',value);
      this.inventory.products = value;
      this.inventory.products =  this.inventory.products.filter((product) => {return product.currentInventory === this.inventory._id})
      console.log('this inventory is', this.inventory)
      console.log('this inventory products are', this.inventory.products)
      this.isLoading = false;
    },error => {
      console.log(error)
      this.isLoading = false;
    })
    
  }

  deleteProduct(product:any)
  { 
    if(!window.confirm('Product will be deleted!, Proceed??')) {
    return;
    }
    const delIdx = this.inventory.products.findIndex(p => p.id === product.id);

    let id  = this.inventory.products[delIdx]._id;
    this.isLoading = true;
    this.userService.deleteProductById(id).then(value =>{
      console.log('deleted product is', value.id);

      this.inventory.products.splice(delIdx,1);
      this.isLoading = false;
    },
    error =>{
      console.log(error);
      this.isLoading =false;
    });

  }

  goback()
  { 
    console.log('clicked go back')
    this.goBackEvent.emit();

  }

  addProduct()
  { 
    this.addProductEvent.emit();
    console.log('add product dialog box opened')
  }


}
