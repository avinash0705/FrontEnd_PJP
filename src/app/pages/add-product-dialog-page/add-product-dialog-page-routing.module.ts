import { AddProductDialogPageComponent } from './add-product-dialog-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {path:'',component:AddProductDialogPageComponent,data:{shouldReuse:true,key:'add-product-dialog'}},  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProductDialogPageRoutingModule { }
