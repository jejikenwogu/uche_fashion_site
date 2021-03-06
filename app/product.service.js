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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getAllProducts = function () {
        return this.http.get('api/products/')
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ProductService.prototype.getProductsOfGarmentType = function (garmentType) {
        return this.http.get('api/products/?garmentType=' + garmentType)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ProductService.prototype.getProductsOfCollection = function (collection) {
        return this.http.get('api/collectionProducts/?collection=' + collection)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ProductService.prototype.getProductById = function (id) {
        return this.http.get('api/products/?id=^' + id + '$')
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /*
        getProductDetails(productId:number): Promise<Product> {
    
        }
    */
    ProductService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map