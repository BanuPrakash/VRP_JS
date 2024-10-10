const {filter, map} = require('./lib'); // import

var products = [
    { "id": 34, "name": "iPhone 15", "price": 89000.00, "category": "mobile" },
    { "id": 88, "name": "Sony Bravia", "price": 289000.00, "category": "tv" },
    { "id": 65, "name": "Samsung Fold", "price": 310000.00, "category": "mobile" },
    { "id": 23, "name": "Onida KY Thunder", "price": 3000.00, "category": "tv" },
    { "id": 87, "name": "Wacom", "price": 6000.00, "category": "computer" },
    { "id": 33, "name": "SanDisk", "price": 500.00, "category": "computer" }
];

var numbers = [45,12,11,17,2,3];

var evens = filter(numbers, e => e % 2 === 0);

var mobiles = filter(products, p => p.category === 'mobile');

console.log(evens);
console.log(mobiles);
