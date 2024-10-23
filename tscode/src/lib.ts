
type Product = {
    id: number,
    name: string,
    price: number,
    category: string
}

// HOF because predicate is a function
function filter<T>(elems: T[], predicate: (elem: T) => boolean): T[] {
    var results: T[] = [];
    elems.forEach(e => {
        if (predicate(e)) {
            results.push(e);
        }
    });
    return results;
}

let products: Product[] = [
    { "id": 34, "name": "iPhone 15", "price": 89000.00, "category": "mobile" },
    { "id": 88, "name": "Sony Bravia", "price": 289000.00, "category": "tv" },
    { "id": 65, "name": "Samsung Fold", "price": 310000.00, "category": "mobile" },
    { "id": 23, "name": "Onida KY Thunder", "price": 3000.00, "category": "tv" },
    { "id": 87, "name": "Wacom", "price": 6000.00, "category": "computer" },
    { "id": 33, "name": "SanDisk", "price": 500.00, "category": "computer" }
];

let numbers: number[] = [45, 12, 11, 17, 2, 3];

var evens: number[] = filter(numbers, e => e % 2 === 0);

var mobiles: Product[] = filter(products, p => p.category === 'mobile');

console.log(evens);
console.log(mobiles);


//function filter<T>(elems:T[], predicate:(elem:T) => boolean):T[] {
function map<T, R>(elems: T[], transformFn: (elem: T) => R): R[] {
    var results: R[] = [];
    elems.forEach(e => {
        results.push(transformFn(e));
    });
    return results;
}


let doubles: number[] = map(numbers, e => e * 2);
console.log(doubles);

var names: string[] = map(products, p => p.name);
console.log(names);