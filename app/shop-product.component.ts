import { Component,Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'shop-product-component',
    templateUrl: 'shop-product.component.html',
    //styleUrls: [ 'nav.component.css' ],
})

export class ShopProductComponent {
    @Input()
    set ready(isReady: boolean) {
        if (isReady) {
            $(".grid").masonry({
                itemSelector: '.grid-item',
                columnWidth: 220
            });
        }
    }
}
