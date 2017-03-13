import { Component,Input } from '@angular/core';
import {Product} from "./product";
import {ProductService} from "./product.service";
import { ActivatedRoute, Params }   from '@angular/router';
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'shop-component',
    templateUrl: 'shop.component.html',
    //styleUrls: [ 'nav.component.css' ],
})

export class ShopComponent {
    private products: Product[];
    private sub: any;

    constructor (
        private productService: ProductService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            var garmentType = params['id'];
            if(garmentType === undefined) {
                this.refreshAll();
            }
            else {
                this.refreshGarmentType(garmentType);
            }
        });


        $(".grid").isotope({
            percentPosition: true
        });
    }

    private refreshAll() {
        this.productService.getAllProducts()
            .then(products => {
                var countImagesToAdd = Math.floor(products.length/5);
                if(countImagesToAdd > 0) {
                    var tmpProduct = new Product();
                    tmpProduct.shopImage = "../resources/images/raw-11.jpg";
                    for(var i = 1; i < countImagesToAdd + 1; i++) {
                        products.splice(i*5-1, 0, tmpProduct);
                    }
                }
                this.products = products;
            });
    }

    private refreshGarmentType(garmentType:string) {
        this.productService.getProductsOfGarmentType(garmentType)
            .then(products => {
                var countImagesToAdd = Math.floor(products.length/5);
                if(countImagesToAdd > 0) {
                    var tmpProduct = new Product();
                    tmpProduct.shopImage = "../resources/images/raw-11.jpg";
                    for(var i = 1; i < countImagesToAdd + 1; i++) {
                        products.splice(i*5-1, 0, tmpProduct);
                    }
                }
                this.products = products;
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
