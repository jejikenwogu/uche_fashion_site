import { Component } from '@angular/core';
import {CollectionService} from "./collection.service";
import {ProductService} from "./product.service";
import { ActivatedRoute }   from '@angular/router';
import {CollectionOutfit} from "./collection-outfit";
import {Product} from "./product";

@Component({
    moduleId: module.id,
    selector: 'collection-component',
    templateUrl: 'collection.component.html',
    //styleUrls: [ 'nav.component.css' ],
})

export class CollectionComponent {
    private sub: any;
    private collectionOutfits: CollectionOutfit[];
    private collectionProducts: Product[];

    constructor (
        private collectionService: CollectionService,
        private productService: ProductService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            var collection = params['id'];
            this.collectionService.getCollectionOutfitsForCollection(collection)
                .then(collectionOutfits => {
                    this.collectionOutfits = collectionOutfits;
                });
            this.productService.getProductsOfCollection(collection)
                .then(collectionProducts => {
                    this.collectionProducts = collectionProducts;
                });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}