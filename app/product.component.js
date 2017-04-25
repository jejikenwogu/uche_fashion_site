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
var product_service_1 = require("./product.service");
var router_1 = require('@angular/router');
var product_1 = require("./product");
var ProductComponent = (function () {
    function ProductComponent(productService, route) {
        this.productService = productService;
        this.route = route;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product = new product_1.Product();
        this.tab = 0;
        this.sub = this.route.params.subscribe(function (params) {
            var productId = params['id'];
            _this.productService.getProductById(productId)
                .then(function (product) {
                _this.product = product[0];
            });
        });
    };
    ProductComponent.prototype.tabNav = function (tab) {
        this.tab = tab;
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-component',
            templateUrl: 'product.component.html',
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.ActivatedRoute])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map