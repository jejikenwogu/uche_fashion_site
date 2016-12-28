import { Component,Input } from '@angular/core';
import {Product} from "./product";

@Component({
    moduleId: module.id,
    selector: 'shop-product-component',
    templateUrl: 'shop-product.component.html',
    //styleUrls: [ 'nav.component.css' ],
})

export class ShopProductComponent {
    private isReady: boolean = false;
    @Input() product: Product;
    @Input()
    set ready(isReady: boolean) {
        this.isReady = isReady;
    }

    ngAfterViewInit() {
        if(this.isReady) {
            $(".grid").isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item'
                }
            });
        }
    }

    ngOnDestroy() {
        console.log("destroy shop product component");
    }
}
