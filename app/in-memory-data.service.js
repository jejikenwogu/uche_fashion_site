"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            { id: 1, name: 'not sure', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dress", entryTS: 0 },
            { id: 2, name: 'what do you call it', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dress", entryTS: 0 },
            { id: 3, name: 'just clothes', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dress", entryTS: 0 },
            { id: 4, name: 'this is weird', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dress", entryTS: 0 },
            { id: 5, name: 'i do not like it', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dress", entryTS: 0 },
            { id: 6, name: 'why', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dress", entryTS: 0 },
            { id: 7, name: 'meh', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dress", entryTS: 0 },
            { id: 8, name: 'a joke', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dress", entryTS: 0 },
            { id: 9, name: 'fair', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dress", entryTS: 0 },
            { id: 10, name: 'maaar', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dress", entryTS: 0 },
            { id: 11, name: 'some dress', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "dress", entryTS: 0 },
            { id: 12, name: 'a shirt', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "shirt", entryTS: 0 },
            { id: 13, name: 'pants', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "pants", entryTS: 0 },
            { id: 14, name: 'shoes', shopImage: '../resources/images/raw-11.jpg', price: 100, garmentType: "pants", entryTS: 0 }
        ];
        return { products: products };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map