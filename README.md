# JavaScript
https://github.com/BanuPrakash/VRP_JS

npm config edit

this opens .npmrc file

in this you need to configure proxy settings and add your access token
CMD + SHIFT and .

/Users/<<username>>//.npmrc open in TextEdit

===============================================

JavaScript:
scripting language, interpreted, loosely typed, dynamically  typed, event driven programming language

JavaScript runs on JavaScript engine.
JavaScript engines:
1) V8 engine --> Chrome/ NodeJS --> by Google
2) SpiderMonkey --> FireFox
3) JavaScriptVM --> Opera
4) IonMonkey
5) Rhino --> Mozilla compatable browsers
6) Nashorn --> Oracle --> Java based engine

variables are declared using a keyword "var"

var name = "Smith"; // string
name.toUpperCase(); // works

var age = 24; // number
age++;

var employed = true;

age = "Twenty Five"; // valid
age.toUpperCase();// valid

----

functions in JS

```
function add(x, y) {
    return x + y;
}


function add(x, y) {
    console.log(x + y);
}

function add(x, y) {
    return 
        x + y; // not reachable code
}

var res = add(4,5); // undefined


var add = function(x,y ) { return x + y; }

var add = (x, y) => x + y;

```

Creation and Execution Context in JS:

```
    
    var g = 100; // global variable

    function doTask() {
        var a = 10;
        if( g > a) {
            var b = 20;
            c = 30;
        }
        console.log(g, a, b, c);
    }

    doTask();
    console.log(g, a, b, c);

```

"use strict"

====

Event Loop: file.js
```
console.log("Hello");

setTimeout(function doTask() {
    console.log("task 1");
}, 0);

setTimeout(function doAnotherTask() {
    console.log("task 2");
}, 0);

Promise.resolve().then(function p1() {
    console.log("p1");
});

Promise.resolve().then(function p2() {
    console.log("p2");
});

console.log("Bye");


class TimerThread extends Thread {
    TimerThread(Method m, long duration, Queue q) { ...}

    run() {
        Thread.sleep(duration);
        q.push(m);
    }
}

```

OOP with JS:

1) var person = new Object();
person.name = "Smith";
person.age = 26;

2) JSON

var person = {
    "name": "Peter",
    "age" : 26
}

3) function prototype

```
Class owned instance methods:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Adding Behaviour: // methods

// instance methods
Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.setAge = function(age) {
    this.age = age;
}

Person.equals = function(p1, p2) {
    return ((p1.name === p2.name) && (p1.age === p2.age));
}


var r = new Person("Roger", 54);
var y = new Person("Yanni", 34);

r.getName();
r.setAge(41);

if(Person.equals(r, y)) {

}

console.log(r.name);
console.log(y.name);

Person("Emma", 34); // ?


Object owned instance methods:
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function() {
        return this.name;
    }
    this.getAge = function() {
        return this.age;
    }
}

```

call and apply:
```
function updateName(name) {
    this.name = name;
}

var employee = {
    "name": "Sunny",
    "age": 23,
    "email": "sun@visa.com"
}

var product = {
    "name" : "Macbook",
    "price": 289000.00
}

updateName.call(employee, "Asha");
updateName.call(product, "iPhone");
```

Binding:

```
var person = {
    "name": "Peter",
    "age" : 26,
    "updateName" : function(name) {
        this.name = name;
    }
}

person.updateName("Gavin"); // valid


var ref = person.updateName; //function definition
ref("Tim"); // fails --> context is lost, this refers to window

var ref2 = person.updateName.bind(person);
ref2("Tim"); // works
```

Follow on Twitter:
addy osmani [Google Developer] --> JS Design Patterns
and Dan Abramov [React Development team]

===============================
sudo npm i -g javascripting
javascripting

=======================

functional style of Programming using HOF:
High Order functions:
1) function accepting function as argument
2) functions returns a function [closure]

Closure: when a function returns a function, returned function can access all the members of outer function in the form closure

```
    function adder(base) {
        return function(no) {
            return base + no;
        }
    }

var fiveAdder = adder(5);

fiveAdder(2); // 7
fiveAdder(4);

var tenAdder = adder(10); 
tenAdder(2); // 12
```

JS versions: ECMA --> 

ES5 target engine

ES6 / ES2015 /JS6 version
ES7 / ES2020/ JS 7 latest

ES6+ version ===>  Babel / Tracuer  ===> ES5

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines.

ES2015 / ES6 / JS6 features:
1) arrow function [Syntax transform]
2) template literal string [Syntax transform]
`
 <div class="card">
  <div class="card-header">
                        ${p.name}
  </div>
                    
</div>
`

3) Destructuring
3.1) objects

var product = { "id": 34, "name": "iPhone 15", "price": 89000.00, "category": "mobile" };
var product2 = { "id": 34, "name": "iPhone 15", "price": 89000.00, "category": "mobile" };

console.log(product.name, product.price);

With ES6
var {name, price} = product;
console.log(name, price);

var {name: n2, price: p2} = product2;

3.2) arrays

var colors = ["red", "green", "blue", "pink", "orange"];

old way:
colors[0];

with ES6:
var [r, g, b, ...others] = colors;

console.log(r); // red
console.log(others); // ["pink", "orange"]

4) let and const has block level scope

Addy Osmani

const PI = 3.14159;

PI = 4.5; // error

to declare block level scope

function doTask() {
    var x = 10;
    if( x > 5) {
        let y = 15;
        console.log(y);
    }

    console.log(x); // 10
    console.log(y); // error, y is block scope
}


function doTask() {
    var x = 10;
    if( x > 5) {
        let _y = (function() {
            var y = 20;
            return {
                y;
            }
        })();
        console.log(_y());
    }

    console.log(x); // 10
    console.log(y); // error, y is block scope
}

5) Promise 
Promise is a proxy object which is used to execute async calls

pending state --> fullfilled state
pending state --> rejected state

Synchronous function
```
    function doTask() {...}

    let res = doTask(); // blocked

```

ASynchronous function
```
    function doTask() {... Promise API ...}

    doTask().then(function resolveHandler(data) {

    },
    function rejectHandler(err) {

    }
    )

    console.log("bye"); // not blocked ...
    
```

6) async and await : syntatical sugar in top of Promise to avoid callback hell

7) Clone

var product = { "id": 34, "name": "iPhone 15", "price": 89000.00, "category": "mobile" };

var ref = product; // refernece, points to same location
ref.price = 99999;
product.price will also be changed

var copy = {...product}; // clone

Part 2:

var nos = [5,2,51, 33];

var no_dup = [...nos];

=========

