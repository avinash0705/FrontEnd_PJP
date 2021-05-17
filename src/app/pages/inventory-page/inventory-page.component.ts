import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss'],
})
export class InventoryPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
        
   }
  id : any;
  isLoading = false;
  newProductName="";
  @Output() goBackEvent = new EventEmitter<any>();
  @Input() inventory :any;
  ngOnInit() {
    this.isLoading = true; 

    console.log('passed inventory is ', this.inventory)
    this.isLoading = false;
    
  }

  deleteProduct(product:any)
  { 
    if(!window.confirm('Product will be deleted!, Proceed??'))
    return;
    let delIdx = this.inventory.products.findIndex(p => p.id === product.id);

    this.inventory.products.splice(delIdx,1);
  }

  goback()
  { 
    console.log('clicked go back')
    this.goBackEvent.emit();

  }

  addProduct()
  {
    console.log('add product dialog box opened')
  }


}
