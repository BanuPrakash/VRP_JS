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

========================================

React

JSX --- React.createElement() ---> JS Object <<potential DOM>> --> render() --> DOM element / Tv Element / Mobile element


Core API of React is React.createElement()

React node: are not real DOM nodes, but a representation of a potential DOM node. The representation is considered the Virtual DOM.

ReactElement is an object with type and props.
props --> attributes and children

=============================
Scaffolding code with all dependencies installed and webconfig configured internally
* installs react library [React.createElement, ...]
* installs react-dom library [render()]
* webpack, babel, babel presets, babel-loader, ...

command prompt> npx create-react-app customerapp 

react-scripts: a wrapper for webpack commands.

================================

React Components:
* React.createElement() <<Rarely we use this>>
let SampleComp = React.createElement("h1", {"width": "50px"}, "Hello World");

* functional component << Max used>>
functional components returns JSX. returned JSX is passed on to React.createElement internally
```
function ProductCard({product}) {
    return <div className="card" >
            <div className="card-header">{product.name}</div>
            <p>{product.category}, Rs. ${product.price}</p>
    </div>
}
```
* class component
-> can have state and behaviour
-> render() method returns a JSX
```
class ProductCard extends Component {
    product; //state
    doThis() { // behaviour

    }
    doThat() { // behaviour

    }
    render() { // return JSX
         return <div className="card" >
            <div className="card-header">{this.product.name}</div>
            <p>{this.product.category}, Rs. ${this.product.price}</p>
    </div>
    }
}
```

Thinking in React: https://react.dev/learn/thinking-in-react
* Atoms:
 Basic building blocks of matter, such as button, input, image, ...
 They are not useful on their own
* Molecules: Groping atoms together to build functionality
* Organisms: Combining molecules together 
* Templates: group of organisms 
* Pages: collection of different templates like : search Tmplate, Results Template, Navbar template

More the fine-grained better mangable and resulble components

99% of the time Atoms are readily available and provided by different re-useable components provided by MUI /react-bootstrap/ adobe-spectrum/KendoUI/PrimeReact/ .... 
we rarely bulid them. We can make use of DOM elements itself. <button type="button">OK</button>

Few Molecules are readily available like table / card /...

===============================

Figma to React
XSD to React
https://www.locofy.ai/

==============================
Scripts:
1)
```
"start": "react-scripts start",
is same as 

"start": "webpack serve --mode development",
```

2) 
```
 "build": "react-scripts build", is same as
  "build": "webpack --mode development",
```
3) 
```
 "test": "react-scripts test",
 same as
  "test": "jest",
```

4) 
```
 "eject": "react-scripts eject"
 ejects project which contains webpack.config.js
 and all the low level configurations which are 
 customizable
 Note: Not reversable
 ```

Project is built using webpack where "index.js" is an entry point

html-webpack-plugin

index.js + App.js ==> bundle.js

===========
```
Reconciliation in React refers to the process of updating the DOM (Document Object Model) to match the most recent virtual representation of a component's UI. 

In simpler terms, it's React's way of ensuring that the user interface reflects the current application state accurately.
```
https://legacy.reactjs.org/docs/reconciliation.html

=====================================

Class Component Life Cycle methods:
1) Mounting phase
constructor() --> render() --> componentDidMount()
Any API call needs to be done in componentDidMount() and not in constructor()
first render() should happen with all default values, else it leads to FCP issue.

componentDidMount() --> update the state with the result of API call.
that leads to reconcillation

Example: youtube intializes empty 20 videos and 20 rectangle placeholders are created
then API call happens with the result from API call, we start seeing actual videos

2) Updating Phase
whenever state changes / props changes this phase happens
```
shouldComponentMount() --> true --> render() --> componentDidUpdate()
shouldComponentMount() --> false 
```
 componentDidUpdate() is where we make API calls << Pending to illustrate>>

 3) Unmounting Phase
 componentWillUnmount() called before destroying the component
 here unsubscribe, unregister, display Thank You / Do you want to really delete ...

 ==============================

 Testing:
 * Unit Testing : Jasmine, Mocha and JEST
 * Integration Testing
 * E2E Testing

RTL: React Testing Library is built on top of JEST for Unit and Integration testing
E2E Testing: Selenium, Cypress, ...

screen.getByRole('button'); // first button
screen.getAllByRole('button'); // get all buttons

<input type='text' placeholder='search by name' />
screen.getByPlaceholderText('search by name');

<h1> Customer Application </h1>

screen.getByText(/customer application/i);

On top of it we can also use low level DOM accessors, getElementById, querySelector()...

====
How much of Code is tested?

Code Coverage ==> IstanbulJS

npm test -- --coverage --watchAll 

=================================

E2E:
npm i cypress -D

===========================================

React 18+ version << current version>>
Recap:
React Components
* React.createElement()
* functional component [upto version React 16.8, functional components can't have state and behaviour]
* class component [ can have state and behaviour]

Rules for Class Component
* extends Component
* state variables has to be set as "state" data structure

```
state = {
    name : "Raj",
    age: 34,
    email : "raj@visa.com",
    skills: ["react", "Spring", "AWS"]
}


let newSkills = this.state.skills;
newSkills.push("Azure");

this.setState({
    skills: newSkills
});

```

memo [HOC] code looks like :
```
function memo(component) {
    let cacheProps = {};
    // store to cache
    if(cacheProps["age"] === props.age) {
        return;
    }
     else {
        return component(props);
     }
}
```

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
* useState
* useEffect
* useReducer
* useContext
* useMemo
... many more...

useEffect: is similar to life-cycle methods of class components
```
// componentDidMount
useEffect(() => {
    // called only once
    // place where API calls has to happen
},[]);

// componentDidUpdate
useEffect(() => {
    // called whenever any state change
});


// componentDidUpdate
useEffect(() => {
    // called whenever age changes
    // dependend API call
}, [age]);

// componentDidMount
useEffect(() => {
    // called only once
    return () => { // code for componentWillUnmount}
},[]);
```
===============

 useReducer: hook should be used instead of useState when
 * we need conditional mutation of state
 * state mutation depends on previous state

 state:
 {
    cartItems: [],
    total: 0,
    count: 0
 }

------------------------

Action:
```
{
    type: 'ADD_TO_CART',
    payload: {...}
}

{
    type: 'REMOVE_FROM_CART',
    payload: 8
}

{
    type: 'CLEAR_CART'
}

{
    type: 'INCREMENT',
    payload: 1
}
```

Reducer function: (state, action) => newState

=================================================

built a Shopping Application:
dependencies:
1) bootstrap : css framework
2) react-bootstrap: library which contains atoms and molecules built using bootstrap like "button", "card", "navbar"
3) axios: to make API call instead of fetch. axios has better APIs compared to fetch for invoking RESTful endpoints.
4) react-router-dom:for SPA [only one index.html] --> is for Web application
Different URLs has to display different views
http://amazon.com --> displays landing page
http://amazon.com/mobiles --> display only mobiles
http://amazon.com/tvs --> display only tvs
http://amazon.com/cart --> show the cart
...
https://ionicframework.com/docs/

5) FontAwesome : icons 

Urls for the application:
http://localhost:3000 ==> landing page
http://localhost:3000/products --> display products
http://localhost:3000/cart --> display cart items
http://localhost:3000/details/3 --> display details of product with id "3"
http://localhost:3000/new_product --> ProductForm
http://localhost:3000/acsfd --> Default

Components required:
1) ProductList.jsx
2) ProductCard.jsx
3) NavbarComponent.jsx
4) Cart.jsx
5) CartList.jsx
6) Default.jsx
7) Details.jsx
8) ProductForm.jsx

==========================================

npx create-react-app shopapp

for Mac users:
create a folder, copy everything except "node_modules" from "shopapp" into the new folder
new_folder> npm i

new_folder> npm i react-router-dom
new_folder> npm i bootstrap react-bootstrap

in index.js:
import 'bootstrap/dist/css/bootstrap.min.css'

https://react-bootstrap.netlify.app/

href==> Server Side Routing --> Make API call to Server
Link ==> Client side Routing --> to use Route configured.


new_folder> npm i axios

Task: https://dummyjson.com/recipes

==========

new_folder> 
npm i @fortawesome/react-fontawesome  @fortawesome/free-solid-svg-icons

cart state:

```
{
    cartItems: [],
    total: 0,
    quantity: 0
}

```

Action types: 
ADD_TO_CART, INCREMENT, DECREMENT, CLEAR_CART
====

 npx json-server --watch data.json --port 1234

 json-server uses a file <<data.json>> as datastore and endpoints
 we can perform CRUD operations on data.json
 
 done by login:
 window.sessionStorage.setItem("user", "banu@gmail.com");

 ====

 Task:
 https://opentdb.com/api.php?amount=10

 "correct_answer": "Sierra Leone",
"incorrect_answers": [
"Liberia",
"Burkina Faso",
"Central African Republic"
]

should become options:
options: [...incorrect_answers, correct_answer]

https://www.geeksforgeeks.org/underscore-js-_-shuffle-function/

read all the questions from  https://opentdb.com/api.php?amount=10
and store them in Context


```
import React, { createContext, useContext, useState } from 'react';

const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);
  };

  const contextValue = {
    currentQuestion,
    selectedAnswer,
    handleAnswerSelect,
    nextQuestion,
  };

  return (
    <QuestionContext.Provider value={contextValue}>
      {children}
    </QuestionContext.Provider>
  );
};

const QuestionComponent = () => {
  const { currentQuestion, selectedAnswer, handleAnswerSelect, nextQuestion } = useContext(QuestionContext);
  const questions = [
    { question: 'What is the capital of France?', options: ['Paris', 'Berlin', 'London'] },
    // Add more questions here
  ];

  const question = questions[currentQuestion];

  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswerSelect(option)}>
          {option}
        </button>
      ))}
      {selectedAnswer && <button onClick={nextQuestion}>Next</button>}
    </div>
  );
};

const App = () => {
  return (
    <QuestionProvider>
      <QuestionComponent />
    </QuestionProvider>
  );
};

```

Handling Special characters:
```
question = question.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
question = question.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
question = question.replace(/&quot;/g, '"')
question = question.replace(/&#039;/g, "'")

```
Application so far...
Recap:

1) json-server: fake RESTApis
create a "json" file which acts like a data store and endpoints

npx json-server -watch <<json file>> --port <<port number>>
This starts our RESTful Web Server
Example:
npx json-server --watch data.json --port 1234 

2) react-router-dom
* different URLs different elements can be rendered
* Client side routing
use Link instead of href
* Lazy loading of components << yet to be explained>>

3) React Context
central placeholder for data ==> State management
* Provider ==> places the data in Context
* Consumer ==> gets data from Context [useContext]
* used to avoid props progation thro a lot of intermediary components.

4) Reducers
* use useReducer() instead of useState() if
a) mutation is conditional << based on action type>>
b) mutation depends on previous state
c) uses a reducer function : (state, action) => return new state <<which is update internally>>

5) bootstrap is a css framework, alternatively we could have used TailsWind, Bulma, Zurb,..

6) react-boostrap: creates a react component using "bootstrap" css
provides atoms like: image, button,,
provides molecules like : card, navbar, ...

Alternatively we could use MUI: Material UI.
https://mui.com/material-ui/getting-started/installation/


Example:
in boostrap:
```
<div class="container"></div>
<div class="nav"></div>
```
becomes in react-bootstrap:
```
    <Container></Container>
    <Nav> </Nav>
```

7) fontawesome: library for icons
"@fortawesome/react-fontawesome" provided react components for fontawesome icons.

===================================================
in Spring boot RestController:
https://spring.io/guides/gs/rest-service-cors


@CrossOrigin(origins = "http://localhost:3000")
or
@CrossOrigin(origins = "*")

====================================================

```
https://opentdb.com/api.php?amount=10
questions.json

{
"results" [
    {
    "user" : "banu@gmail.com",
    "score" : 76,
    "total": 100
    }
]
"questions" : [
    {
        "question": "If soccer is called football in England, what is American football called in England?",
        "correct_answer": "American football",
        "incorrect_answers": [
            "Combball",
            "American football"
            "Handball",
            "Touchdown"
        ]
    },
...
]

npx json-server --watch questions.json --port 3456
```
https://www.classmarker.com/online-test/start/?quiz=xg6670fab6e3da53

```

export default function Questions() {
    let [questions, setQuestions] = useState([]);
    useEffect(() => {
        axios.get("https://opentdb.com/api.php?amount=10")
            .then(response => {
                setQuestions(response.data.results)
            })
    }, []);
    
    return (
        <div>
            {
                questions && questions.map((q, index) => <div key={index}> {q.question} </div>)
            }
        </div>
    )
}

```

Handling Form data in react:
1) Controlled Component
2) Uncontrolled Component

```
Controlled components rely on React state to manage the form data, 
while uncontrolled components use the DOM itself to handle form data.
```

1) http://localhost:3000/details/4

useParams() is to read the PathVariable.

2) http://localhost:3000/products?page=1&size=20

useSearchParams() is to read Request Paramrams

========================================

React 17 Rendering: <<STACK>>
```
import ReactDOM from 'react-dom';
ReactDOM.render(
    <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
)

ReactDOM.render is no longer supported in React 18. Use createRoot instead.
```

React 18 Rendering: <<FIBER>>

```
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);

```

React 18 uses Concurrency for rendering, it's based on Fiber Architecture.
Where as upto React 17 it  was Stack Architecture.

https://claudiopro.github.io/react-fiber-vs-stack-demo/

========================

