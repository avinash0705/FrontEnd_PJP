import { NgModule } from '@angular/core';
import {
    PreloadAllModules,
    RouteReuseStrategy, RouterModule, Routes
} from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { NavComponent } from './core/components/nav/nav.component';
import { CustomRouteReuseStrategy } from './core/nav-reuse-strategy';
import { NavGuard } from './core/nav.guard';
import { navRoutes, sideNavPath } from './nav-routing';

const routes: Routes = [
    {
        path: 'analytics',
        loadChildren: () =>
            import('./pages/analytics-page/analytics-page.module').then(
                m => m.AnalyticsPageModule,
            ),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./pages/login-page/login-page.module').then(
                m => m.LoginPageModule,
            ),
    },
    {
        path: sideNavPath,
        component: NavComponent,
        children: navRoutes,
        canActivate: [AuthGuard],
        canActivateChild: [NavGuard],
    },
    {
        path: '**',
        redirectTo: 'login',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
    providers: [
        { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
    ],
})
export class AppRoutingModule {}
