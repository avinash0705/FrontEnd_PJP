import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { LoaderModule } from 'src/app/core/components/loader/loader/loader.module';
import { AddProductDialogPageComponent } from '../add-product-dialog-page/add-product-dialog-page.component';
import { AddProductDialogPageModule } from '../add-product-dialog-page/add-product-dialog-page.module';
import { InventoryPageComponent } from '../inventory-page/inventory-page.component';
import { InventoryPageModule } from '../inventory-page/inventory-page.module';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';


@NgModule({
    declarations: [HomePageComponent,InventoryPageComponent],
    exports : [InventoryPageComponent],
    imports: [
        CommonModule,
        MatInputModule, 
        HomePageRoutingModule,
        LoaderModule,
        InventoryPageModule, 
        AddProductDialogPageModule,
        MatCardModule,
        MatIconModule,
        FormsModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule
    ],
    entryComponents : [AddProductDialogPageComponent]
})
export class HomePageModule {}
