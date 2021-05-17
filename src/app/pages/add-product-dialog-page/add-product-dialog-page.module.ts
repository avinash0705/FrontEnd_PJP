import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { AddProductDialogPageRoutingModule } from './add-product-dialog-page-routing.module';
import { AddProductDialogPageComponent } from './add-product-dialog-page.component';


@NgModule({
  declarations: [AddProductDialogPageComponent],
  imports: [
    CommonModule,
    MatInputModule,
    AddProductDialogPageRoutingModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class AddProductDialogPageModule { }
