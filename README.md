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

=====================

NodeJS: platform which provides "V8" as JS engine, "libuv" for Asynchronous operations << instead of WebApi>>


Why NodeJS?
1) can build traditional web applications using JS like Servlet + JSP
2) can build RESTful WS like what we did in Spring Boot MVC
3) Excellent option for streaming API like Netflix / Hotstar
4) ChatBot
5) Building client side web applications


Why NodeJS for Building client side web applications?
1) we can write code in ES2015+, TypeScript, CoffeeScript, LiveScript, DART

TypeScript: statically typed

function add(x:number, y:number): number {
    ....
}

add(4,6);

add("A", "B"); // tsc throws error

2) Unit Testing, E2E testing

3) Minify, Uglify the code

```
function _m(elems, _t){var _r = [];elems.forEach(e => {results.push(_t_(e));});return results;}
```

4) bundle
product.js
customer.js
order.js
payment.js
item.js


index.html
<script src="product.js"></script>
<script src="customer.js"></script>
<script src="product.js"></script>
<script src="payment.js"></script>
<script src="order.js"></script>

in Production:
<script src="bundle.js"></script>

==============

NodeJS by default understand CommonJS Module system

1) IIFE is plain Vanilla module system
2) CommonJS module system
3) ESM ==> ES Module system
4) System.module
5) AMD ==> Asynchronous module system


IIFE example:
file.js

```
    var Shoppingmodule = (function() {
        var data = [...]; //private
        function add(x) { // public
            validate();
            ..
        }

        function getAll() { // public
            ...
        }

        function validate() { // private

        }
        return {
            add, getAll
        }
    })();


    var customerModule = (function() {
        var data = [...];
        function add(c) {
            ..
        }

        return {
            add
        }
    })();

    Shoppingmodule.add(...);
    customerModule.add(...);
```
npm / yarn / pnpm / Rush / lerna

1) Initialize the project:
npm init --y

2) install JEST
npm i jest -D

-D only requred for development

JS unit testing libraries:
Jasmine, Mocha, JEST

=====

AAA ==> Assemble Action Assert

Assert ==> Jasmine, Mocha, JEST or we can use 3rd party assertion libraries
[Chai.js](https://www.chaijs.com/)

===============================

JS build tools: Task Runners
* Grunt
* Gulp
* Webpack
* vite

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting.

linting ==> static code analysis

airbnb, shopify

==================
https://www.npmjs.com/

 webpack-example % npm init --y

 webpack-example % npm i webpack webpack-cli babel-loader @babel/core @babel/preset-env -D

 @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). 
 This both makes your life easier and JavaScript bundles smaller!

 A polyfill is a piece of code that adds functionality to an environment that doesn't natively support it.

 https://www.npmjs.com/package/core-js

 import Product from './Product';

 npm run dev:
 ```

asset bundle.js 6.2 KiB [emitted] (name: main)
runtime modules 670 bytes 3 modules
cacheable modules 1.41 KiB
  ./src/index.js 847 bytes [built] [code generated]
  ./src/Person.js 237 bytes [built] [code generated]
  ./src/lib.js 356 bytes [built] [code generated]

  ```

  Posts and Users ==> Flights and Hotels
===============================================

.babelrc
babel.config.js
babel.config.json

webpack-example % npm i css-loader style-loader html-webpack-plugin webpack-dev-server -D

====
css-loader style-loader

css-loader allows us to import "css" files in JS files.

index.js
import "styles.css"

style-loader
<style>
</style>

=======
html-webpack-plugin
The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.

<script src="public/bundle.b633405f.js"></script> 

FCP --> Web Vitals
First Contentful Paint

==========================

DOM: Document Object model --> interface to access tree of objects built using XML / HTML

DOM interface : Different language VBScript / JavaScript / Java / ...

Using DOM:
1) we can create elements dynamically
2) can access elements
3) traverse thro elements
4) add event handling to these elements

access elements:
<button id="btn">OK</button>

document.getElementById("btn");
document.getElementsByTagName("div"); // array of elements
<input type="text" placeholder="search by name" />

document.querySelector("input[placeholder='search by name'");

document.querySelectorAll("div");

document.querySelector('.tmpl-headerNavItem_label').innerHTML = "Banu Prakash"


Event Handling:
Source : any DOM element
Listener: a function
Event: object propagated from Source to listener, which contains detalis like "type of event", target, "x" and "y" position, other details like left button, right button

====================

RESTful WS: --> produce JSON,

we need to consume JSON --> Presentation page

Mobile: Android, Swift, ...
Web : DOM based... <<>>
Tv: SmartTV [ Android, WebOS,..]
Desktop : Proton, ...

Client Side Web application development:
1) DOM
2) Libraries like jQuery
docment.createElement("table");
with jQuery --> $("<table />);

document.getElementByTagName("div")
with jQuery --> $("div");

Event handling:
$("#add").on("click", ( ) => {});

3) Templates
* Underscore
* Mustache
* Handlebar
* Pug
* Jade
* EJS
* Knockout
...

```
<tr>
    <td>{{firstName}} </td>
    <td>{{lastName}} </td>
</tr>
```

4) SPA: Single Page Application & RWD: Responsive Web Design
Libraries and Frameworks based on MVC Architectural:
4.1) Backbone library: provided Model and Controller support, view --> any of above templates
4.2) AngularJS: by Google --> Framework
4.3) ReactJS: by Facbook
    XHP: XML in PHP code
5) Angular : google --> Framework

https://www.youtube.com/watch?v=8pDqJVdNa44&t=6s

https://github.com/chentsulin/awesome-react-renderer

React: JSX

npm i @babel/preset-react -D
