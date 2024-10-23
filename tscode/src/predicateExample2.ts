interface Employee {
    getName(): string
}

interface ErrorMsg {
    getMsg(): string;
}

// type predicate functions
function isEmployee(data: Employee | ErrorMsg): data is Employee {
    return typeof (data as Employee).getName === 'function';
}

// type predicate functions
function isError(data: Employee | ErrorMsg): boolean {
    return typeof (data as ErrorMsg).getMsg === 'function';
}

// type checking and casting
function printData(data: Employee | ErrorMsg): void {
    if (isEmployee(data)) {
        // here data is already cast to Employee, no need to again typecast
        console.log(data.getName());
    } else if (isError(data)) {
        console.log(data.getMsg());
    }
}

printData({ getMsg: () => "Hello" });
printData({ getName: () => "Peter" });