import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {CollectionsComponent} from "./collections.component";
import {ShopComponent} from "./shop.component";

/*
const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent }
];s
*/
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    { path: 'collections',  component: CollectionsComponent },
    { path: 'collection/:id',  component: HomeComponent },
    { path: 'shop',  component: ShopComponent },
    { path: 'shop/:id',  component: ShopComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
