import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-product-dialog-page',
  templateUrl: './add-product-dialog-page.component.html',
  styleUrls: ['./add-product-dialog-page.component.scss']
})
export class AddProductDialogPageComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<AddProductDialogPageComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }
    
    newProductName = '';
    newProductDescription = '';
    quantity = 0;
    price = '0';

  ngOnInit() {
  }

  save() {
    this.dialogRef.close({data : {name : this.newProductName, description: this.newProductDescription,quantity : this.quantity,price : this.price}});
  }

  close() {
      this.dialogRef.close();
  }

  isDisabled()
  {
    return (this.newProductName === '' || this.newProductDescription === '' || this.quantity === 0 || this.price === '0');
  }

}
