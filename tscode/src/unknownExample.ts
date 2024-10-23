// unknown type

function someTask(arg:unknown) : void {
    if(typeof arg === 'function') {
        arg();
    } else if(typeof arg === 'string') {
        console.log(arg.toUpperCase());
    }
}

someTask("Hello World");