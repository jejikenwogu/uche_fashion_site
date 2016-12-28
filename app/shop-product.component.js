"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_1 = require("./product");
var ShopProductComponent = (function () {
    function ShopProductComponent() {
        this.isReady = false;
    }
    Object.defineProperty(ShopProductComponent.prototype, "ready", {
        set: function (isReady) {
            this.isReady = isReady;
        },
        enumerable: true,
        configurable: true
    });
    ShopProductComponent.prototype.ngAfterViewInit = function () {
        if (this.isReady) {
            $(".grid").isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item'
                }
            });
        }
    };
    ShopProductComponent.prototype.ngOnDestroy = function () {
        console.log("destroy shop product component");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_1.Product)
    ], ShopProductComponent.prototype, "product", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], ShopProductComponent.prototype, "ready", null);
    ShopProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shop-product-component',
            templateUrl: 'shop-product.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ShopProductComponent);
    return ShopProductComponent;
}());
exports.ShopProductComponent = ShopProductComponent;
//# sourceMappingURL=shop-product.component.js.map