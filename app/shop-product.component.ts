import { Component,Input,ElementRef } from '@angular/core';
import {Product} from "./product";
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'shop-product-component',
    templateUrl: 'shop-product.component.html',
    //styleUrls: [ 'nav.component.css' ],
})

export class ShopProductComponent {
    private ref: any;
    @Input() product: Product;

    constructor(
        private elementRef: ElementRef
    ) {
        this.ref = elementRef;
    }

    ngAfterViewInit() {
        $(".grid").isotope( 'appended', this.ref.nativeElement ).isotope('layout');
    }

    ngOnDestroy() {
        $(".grid").isotope( 'remove', this.ref.nativeElement ).isotope('layout');
    }
}
