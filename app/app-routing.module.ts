import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {CollectionsComponent} from "./collections.component";
import {CollectionComponent} from "./collection.component";
import {ShopComponent} from "./shop.component";
import {ProductComponent} from "./product.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    { path: 'collections',  component: CollectionsComponent },
    { path: 'collection/:id',  component: CollectionComponent },
    { path: 'shop',  component: ShopComponent },
    { path: 'shop/:id',  component: ShopComponent },
    { path: 'product/:id',  component: ProductComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
