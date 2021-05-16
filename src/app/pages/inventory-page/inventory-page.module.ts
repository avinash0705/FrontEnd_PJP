import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderModule } from 'src/app/core/components/loader/loader/loader.module';
import { InventoryPageRoutingModule } from './inventory-page-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InventoryPageRoutingModule,
    LoaderModule
  ]
})
export class InventoryPageModule { }
