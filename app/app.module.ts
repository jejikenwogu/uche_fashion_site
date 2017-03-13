import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { NavComponent }  from './nav.component';
import {HomeComponent} from "./home.component";
import {FooterComponent} from "./footer.component";
import {CollectionsComponent} from "./collections.component";
import {ProductService} from "./product.service";
import {ShopComponent} from "./shop.component";
import {ShopProductComponent} from "./shop-product.component";
import {CollectionComponent} from "./collection.component";
import {CollectionService} from "./collection.service";
import {CollectionOutfit} from "./collection-outfit";
import {CollectionOutfitComponent} from "./collection-outfit.component";

@NgModule({
    imports:      [ 
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        JsonpModule
    ],
    declarations: [ 
        AppComponent,
        NavComponent,
        HomeComponent,
        FooterComponent,
        CollectionsComponent,
        CollectionComponent,
        CollectionOutfitComponent,
        ShopComponent,
        ShopProductComponent
    ],
    providers: [ ProductService, CollectionService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
