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
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var ShopComponent = (function () {
    function ShopComponent(productService) {
        this.productService = productService;
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllProducts()
            .then(function (products) { return _this.products = products; });
    };
    ShopComponent.prototype.ngAfterViewInit = function () {
        $('.grid').masonry({
            // options
            itemSelector: '.grid-item',
            columnWidth: 200
        });
    };
    return ShopComponent;
}());
ShopComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'shop-component',
        templateUrl: 'shop.component.html',
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ShopComponent);
exports.ShopComponent = ShopComponent;
//# sourceMappingURL=shop.component.js.map