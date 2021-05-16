import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderModule } from 'src/app/core/components/loader/loader/loader.module';
import { InventoryPageComponent } from '../inventory-page/inventory-page.component';
import { InventoryPageModule } from '../inventory-page/inventory-page.module';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';


@NgModule({
    declarations: [HomePageComponent,InventoryPageComponent],
    exports : [InventoryPageComponent],
    imports: [CommonModule, HomePageRoutingModule,LoaderModule,InventoryPageModule],
})
export class HomePageModule {}
