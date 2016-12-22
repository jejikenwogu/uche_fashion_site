import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavComponent }  from './nav.component';
import {HomeComponent} from "./home.component";
import {FooterComponent} from "./footer.component";

@NgModule({
    imports:      [ 
        BrowserModule
    ],
    declarations: [ 
        AppComponent,
        NavComponent,
        HomeComponent,
        FooterComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
