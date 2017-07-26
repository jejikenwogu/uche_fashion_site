import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let collections = [
            {id: 1, name: 'Collection 1'}
        ];
        
        let products = [
            {id: 1, name: 'dresses1', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dresses", entryTS: 0, detailImage1: '../resources/images/raw-11.jpg', detailImage2: '../resources/images/raw-11.jpg', detailImage3: '../resources/images/raw-11.jpg', detailImage4: '../resources/images/raw-11.jpg', detailImage5: '../resources/images/raw-11.jpg', detailImage6: '../resources/images/raw-11.jpg'},
            {id: 2, name: 'tops1', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "tops", entryTS: 0, detailImage1: '../resources/images/raw-11.jpg', detailImage2: '../resources/images/raw-11.jpg', detailImage3: '../resources/images/raw-11.jpg', detailImage4: '../resources/images/raw-11.jpg', detailImage5: '../resources/images/raw-11.jpg', detailImage6: '../resources/images/raw-11.jpg'},
            {id: 3, name: 'outerwear1', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "outerwear", entryTS: 0, detailImage1: '../resources/images/raw-11.jpg', detailImage2: '../resources/images/raw-11.jpg', detailImage3: '../resources/images/raw-11.jpg', detailImage4: '../resources/images/raw-11.jpg', detailImage5: '../resources/images/raw-11.jpg', detailImage6: '../resources/images/raw-11.jpg'},
            {id: 4, name: 'pants1', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "pants", entryTS: 0, detailImage1: '../resources/images/raw-11.jpg', detailImage2: '../resources/images/raw-11.jpg', detailImage3: '../resources/images/raw-11.jpg', detailImage4: '../resources/images/raw-11.jpg', detailImage5: '../resources/images/raw-11.jpg', detailImage6: '../resources/images/raw-11.jpg'},
            {id: 5, name: 'skirts1', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "skirts", entryTS: 0, detailImage1: '../resources/images/raw-11.jpg', detailImage2: '../resources/images/raw-11.jpg', detailImage3: '../resources/images/raw-11.jpg', detailImage4: '../resources/images/raw-11.jpg', detailImage5: '../resources/images/raw-11.jpg', detailImage6: '../resources/images/raw-11.jpg'},
            {id: 6, name: 'dresses2', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dresses", entryTS: 0, detailImage1: '../resources/images/raw-11.jpg', detailImage2: '../resources/images/raw-11.jpg', detailImage3: '../resources/images/raw-11.jpg', detailImage4: '../resources/images/raw-11.jpg', detailImage5: '../resources/images/raw-11.jpg', detailImage6: '../resources/images/raw-11.jpg'},
            {id: 7, name: 'tops2', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "tops", entryTS: 0, detailImage1: '../resources/images/raw-11.jpg', detailImage2: '../resources/images/raw-11.jpg', detailImage3: '../resources/images/raw-11.jpg', detailImage4: '../resources/images/raw-11.jpg', detailImage5: '../resources/images/raw-11.jpg', detailImage6: '../resources/images/raw-11.jpg'},
            {id: 8, name: 'outerwear2', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "outerwear", entryTS: 0, detailImage1: '../resources/images/raw-11.jpg', detailImage2: '../resources/images/raw-11.jpg', detailImage3: '../resources/images/raw-11.jpg', detailImage4: '../resources/images/raw-11.jpg', detailImage5: '../resources/images/raw-11.jpg', detailImage6: '../resources/images/raw-11.jpg'},
            {id: 9, name: 'pants2', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "pants", entryTS: 0, detailImage1: '../resources/images/raw-11.jpg', detailImage2: '../resources/images/raw-11.jpg', detailImage3: '../resources/images/raw-11.jpg', detailImage4: '../resources/images/raw-11.jpg', detailImage5: '../resources/images/raw-11.jpg', detailImage6: '../resources/images/raw-11.jpg'},
            {id: 10, name: 'skirts2', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "skirts", entryTS: 0, detailImage1: '../resources/images/raw-11.jpg', detailImage2: '../resources/images/raw-11.jpg', detailImage3: '../resources/images/raw-11.jpg', detailImage4: '../resources/images/raw-11.jpg', detailImage5: '../resources/images/raw-11.jpg', detailImage6: '../resources/images/raw-11.jpg'},
            {id: 11, name: 'dresses3', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dresses", entryTS: 0, detailImage1: '../resources/images/raw-11.jpg', detailImage2: '../resources/images/raw-11.jpg', detailImage3: '../resources/images/raw-11.jpg', detailImage4: '../resources/images/raw-11.jpg', detailImage5: '../resources/images/raw-11.jpg', detailImage6: '../resources/images/raw-11.jpg'},
            {id: 12, name: 'pants3', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "pants", entryTS: 0, detailImage1: '../resources/images/raw-11.jpg', detailImage2: '../resources/images/raw-11.jpg', detailImage3: '../resources/images/raw-11.jpg', detailImage4: '../resources/images/raw-11.jpg', detailImage5: '../resources/images/raw-11.jpg', detailImage6: '../resources/images/raw-11.jpg'},
            {id: 13, name: 'outerwear3', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "outerwear", entryTS: 0, detailImage1: '../resources/images/raw-11.jpg', detailImage2: '../resources/images/raw-11.jpg', detailImage3: '../resources/images/raw-11.jpg', detailImage4: '../resources/images/raw-11.jpg', detailImage5: '../resources/images/raw-11.jpg', detailImage6: '../resources/images/raw-11.jpg'},
            {id: 14, name: 'pants4', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "pants", entryTS: 0, detailImage1: '../resources/images/raw-11.jpg', detailImage2: '../resources/images/raw-11.jpg', detailImage3: '../resources/images/raw-11.jpg', detailImage4: '../resources/images/raw-11.jpg', detailImage5: '../resources/images/raw-11.jpg', detailImage6: '../resources/images/raw-11.jpg'}
        ];

        let collectionOutfits = [
            {type: 1, image1: '../resources/images/raw-11.jpg', image2: '../resources/images/raw-11.jpg', text: "outfit 1", collection: 1},
            {type: 2, image1: '../resources/images/raw-11.jpg', image2: '../resources/images/raw-11.jpg', text: "outfit 2", collection: 1},
            {type: 3, image1: '../resources/images/raw-11.jpg', image2: '../resources/images/raw-11.jpg', text: "outfit 3", collection: 1},
            {type: 4, image1: '../resources/images/raw-11.jpg', image2: '../resources/images/raw-11.jpg', text: "outfit 4", collection: 1}
        ];

        let collectionProducts = [
            {id: 1, name: 'dresses1', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dresses", entryTS: 0, collection: 1},
            {id: 2, name: 'tops1', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "tops", entryTS: 0, collection: 1},
            {id: 3, name: 'outerwear1', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "outerwear", entryTS: 0, collection: 1},
            {id: 4, name: 'pants1', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "pants", entryTS: 0, collection: 1},
            {id: 5, name: 'skirts1', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "skirts", entryTS: 0, collection: 1},
            {id: 6, name: 'dresses2', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dresses", entryTS: 0, collection: 1},
            {id: 7, name: 'tops2', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "tops", entryTS: 0, collection: 1},
            {id: 8, name: 'outerwear2', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "outerwear", entryTS: 0, collection: 2},
            {id: 9, name: 'pants2', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "pants", entryTS: 0, collection: 2},
            {id: 10, name: 'skirts2', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "skirts", entryTS: 0, collection: 2},
            {id: 11, name: 'dresses3', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dresses", entryTS: 0, collection: 2},
            {id: 12, name: 'pants3', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "pants", entryTS: 0, collection: 2},
            {id: 13, name: 'outerwear3', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "outerwear", entryTS: 0, collection: 2},
            {id: 14, name: 'pants4', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "pants", entryTS: 0, collection: 3}
        ];

        return {products, collectionOutfits, collectionProducts};
    }
}
