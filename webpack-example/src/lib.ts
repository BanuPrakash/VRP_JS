const add = (x: number, y: number) => x + y;
export default add;


// HOF because predicate is a function
export function filter<T>(elems: T[], predicate: (elem: T) => boolean): T[] {
    var results: T[] = [];
    elems.forEach(e => {
        if (predicate(e)) {
            results.push(e);
        }
    });
    return results;
}

// export function filter(elems, predicate) {
//     var results = [];

//     elems.forEach(e => {
//         if(predicate(e)) {
//             results.push(e);
//         }
//     });

//     return results;
// }

function map<T, R>(elems: T[], transformFn: (elem: T) => R): R[] {
    var results: R[] = [];
    elems.forEach(e => {
        results.push(transformFn(e));
    });
    return results;
}


// function map(elems, transformFn) {
//     var results = [];
//     elems.forEach(e => {
//             results.push(transformFn(e));
//     });
//     return results;
// }