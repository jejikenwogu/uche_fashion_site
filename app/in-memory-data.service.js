"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            { id: 1, name: 'not sure' },
            { id: 2, name: 'what do you call it' },
            { id: 3, name: 'just clothes' },
            { id: 4, name: 'this is weird' },
            { id: 5, name: 'i do not like it' },
            { id: 6, name: 'why' },
            { id: 7, name: 'meh' },
            { id: 8, name: 'a joke' },
            { id: 9, name: 'fair' },
            { id: 10, name: 'maaar' }
        ];
        return { products: products };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map