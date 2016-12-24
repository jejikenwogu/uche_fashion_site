import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let products = [
            {id: 1, name: 'not sure'},
            {id: 2, name: 'what do you call it'},
            {id: 3, name: 'just clothes'},
            {id: 4, name: 'this is weird'},
            {id: 5, name: 'i do not like it'},
            {id: 6, name: 'why'},
            {id: 7, name: 'meh'},
            {id: 8, name: 'a joke'},
            {id: 9, name: 'fair'},
            {id: 10, name: 'maaar'}
        ];
        return {products};
    }
}
