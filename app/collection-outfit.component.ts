import { Component,Input,ElementRef } from '@angular/core';
import { CollectionOutfit } from "./collection-outfit";
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'collection-outfit-component',
    templateUrl: 'collection-outfit.component.html',
    //styleUrls: [ 'nav.component.css' ],
})

export class CollectionOutfitComponent {
    @Input() collectionOutfit: CollectionOutfit;
}
