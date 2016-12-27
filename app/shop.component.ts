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
            .then(products => {
                var tmpProduct = new Product();
                tmpProduct.shopImage = "../resources/images/raw-11.jpg";
                products.splice(4, 0, tmpProduct);
                products.splice(10, 0, tmpProduct);
                this.products = products;
            });
    }
}
