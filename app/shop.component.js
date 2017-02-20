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
var product_1 = require("./product");
var product_service_1 = require("./product.service");
var router_1 = require("@angular/router");
var ShopComponent = (function () {
    function ShopComponent(productService, route) {
        this.productService = productService;
        this.route = route;
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*
         this.route.params
         .switchMap((params: Params) => this.heroService.getHero(+params['id']))
         .subscribe(hero => this.hero = hero);
         */
        this.sub = this.route.params.subscribe(function (params) {
            var garmentType = params['id'];
            if (garmentType === undefined) {
                _this.refreshAll();
            }
            else {
                _this.refreshGarmentType(garmentType);
            }
        });
        $(".grid").isotope({
            percentPosition: true
        });
    };
    ShopComponent.prototype.refreshAll = function () {
        var _this = this;
        this.productService.getAllProducts()
            .then(function (products) {
            var countImagesToAdd = Math.floor(products.length / 5);
            if (countImagesToAdd > 0) {
                var tmpProduct = new product_1.Product();
                tmpProduct.shopImage = "../resources/images/raw-11.jpg";
                for (var i = 1; i < countImagesToAdd + 1; i++) {
                    products.splice(i * 5 - 1, 0, tmpProduct);
                }
            }
            _this.products = products;
        });
    };
    ShopComponent.prototype.refreshGarmentType = function (garmentType) {
        var _this = this;
        this.productService.getProductsOfGarmentType(garmentType)
            .then(function (products) {
            var countImagesToAdd = Math.floor(products.length / 5);
            if (countImagesToAdd > 0) {
                var tmpProduct = new product_1.Product();
                tmpProduct.shopImage = "../resources/images/raw-11.jpg";
                for (var i = 1; i < countImagesToAdd + 1; i++) {
                    products.splice(i * 5 - 1, 0, tmpProduct);
                }
            }
            _this.products = products;
        });
    };
    ShopComponent.prototype.ngOnDestroy = function () {
        console.log("destroy shop component");
    };
    return ShopComponent;
}());
ShopComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'shop-component',
        templateUrl: 'shop.component.html',
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.ActivatedRoute])
], ShopComponent);
exports.ShopComponent = ShopComponent;
//# sourceMappingURL=shop.component.js.map