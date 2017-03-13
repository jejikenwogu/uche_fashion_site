import { Component,Input } from '@angular/core';
import {CollectionService} from "./collection.service";
import { ActivatedRoute }   from '@angular/router';
import {CollectionOutfit} from "./collection-outfit";

@Component({
    moduleId: module.id,
    selector: 'collection-component',
    templateUrl: 'collection.component.html',
    //styleUrls: [ 'nav.component.css' ],
})

export class CollectionComponent {
    private sub: any;
    private collectionOutfits: CollectionOutfit[];

    constructor (
        private collectionService: CollectionService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            var collection = params['id'];
            this.collectionService.getCollectionOutfitsForCollection(collection)
                .then(collectionOutfits => {
                    console.log(collectionOutfits);
                    this.collectionOutfits = collectionOutfits;
                });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}