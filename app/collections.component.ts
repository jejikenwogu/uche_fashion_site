import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'collections-component',
    templateUrl: 'collections.component.html',
    //styleUrls: [ 'nav.component.css' ],
})

export class CollectionsComponent {

    constructor (
        private router: Router
    ) { }

}