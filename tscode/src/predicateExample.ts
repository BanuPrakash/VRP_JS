// interface Employee {
//     getName(): string
// }

// interface ErrorMsg {
//     getMsg() : string;
// }

// // type checking and casting
// function printData(data: Employee | ErrorMsg) : void {
//     if(typeof (data as Employee).getName === 'function') {
//         (data as Employee).getName();
//     }
// }

// printData({getMsg:() => "Hello"});
// printData({getName:() => "Peter"});