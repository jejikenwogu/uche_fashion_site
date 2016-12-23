import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { NavComponent }  from './nav.component';
import {HomeComponent} from "./home.component";
import {FooterComponent} from "./footer.component";
import {CollectionsComponent} from "./collections.component";

@NgModule({
    imports:      [ 
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [ 
        AppComponent,
        NavComponent,
        HomeComponent,
        FooterComponent,
        CollectionsComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
