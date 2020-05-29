import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true, anchorScrolling: 'enabled'})

