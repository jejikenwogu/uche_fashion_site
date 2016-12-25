import { Component,Input } from '@angular/core';
import {Product} from "./product";
import {ProductService} from "./product.service";

@Component({
    moduleId: module.id,
    selector: 'shop-component',
    templateUrl: 'shop.component.html',
    //styleUrls: [ 'nav.component.css' ],
})

export class ShopComponent {
    products: Product[];

    constructor (private productService: ProductService) { }

    ngOnInit() {
        this.productService.getAllProducts()
            .then(products => this.products = products);
    }
}
