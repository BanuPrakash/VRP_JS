

// HOF because predicate is a function
function filter(elems, predicate) {
    var results = [];
    // elems.forEach(function action(e) {
    //     if(predicate(e)) {
    //         results.push(e);
    //     }
    // });

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