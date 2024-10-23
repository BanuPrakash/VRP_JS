// illustrate "any" type

function doTask(arg:any):void {
    arg();
}

// doTask("Hello World!!!");
doTask(console.log);