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
        ShopComponent
    ],
    providers: [ ProductService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
