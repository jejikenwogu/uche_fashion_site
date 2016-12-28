import { Injectable } from '@angular/core';
import { Product } from "./product";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

    constructor(private http: Http) {}
    
    public getAllProducts(): Promise<Product[]> {
        return this.http.get('api/products/')
            .toPromise()
            .then(response => response.json().data as Product[])
            .catch(this.handleError);
    }

    public getProductsOfGarmentType(garmentType:string): Promise<Product[]> {
        return this.http.get('api/products/?garmentType=' + garmentType)
            .toPromise()
            .then(response => response.json().data as Product[])
            .catch(this.handleError);
    }
/*
    getProductDetails(productId:number): Promise<Product> {

    }
*/
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}