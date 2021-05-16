import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
    {
        path: '',
        data: { shouldReuse: true, key: 'home' },
        component: HomePageComponent,
    },

    {
        path: 'inventory/:id',
        loadChildren: () =>
            import('../inventory-page/inventory-page.module').then(
                m => m.InventoryPageModule,
            ),
        data: { title: 'Child', isChild: true },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule {}
