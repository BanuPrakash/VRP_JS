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







