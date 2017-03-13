import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CollectionOutfit} from './collection-outfit';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CollectionService {

    constructor(private http: Http) {}

    public getCollectionOutfitsForCollection(collection:number): Promise<CollectionOutfit[]> {
        return this.http.get('api/collectionOutfits/?collection=' + collection)
            .toPromise()
            .then(response => response.json().data as CollectionOutfit[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}