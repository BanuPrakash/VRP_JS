function add(x,y) {
    return x + y ;
}

function filter(elems, predicate) {
    var results = [];
 
    elems.forEach(e => {
        if(predicate(e)) {
            results.push(e);
        }
    });

    return results;
}


function map(elems, transformFn) {
    var results = [];
    elems.forEach(e => {
            results.push(transformFn(e));
    });
    return results;
}

module.exports = {
    add,
    filter,
    map
}