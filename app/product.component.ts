import { Component } from '@angular/core';
import {ProductService} from "./product.service";
import { ActivatedRoute }   from '@angular/router';
import {Product} from "./product";

@Component({
    moduleId: module.id,
    selector: 'product-component',
    templateUrl: 'product.component.html',
    //styleUrls: [ 'nav.component.css' ],
})

export class ProductComponent {
    private sub: any;
    private product: Product;
    private tab: number;

    constructor (
        private productService: ProductService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.product = new Product();
        this.tab = 0;
        this.sub = this.route.params.subscribe(params => {
            var productId = params['id'];
            this.productService.getProductById(productId)
                .then(product => {
                    this.product = product[0];
                });
        });
    }

    tabNav(tab:number) {
        this.tab = tab;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
