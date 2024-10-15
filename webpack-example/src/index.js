import Person from "./Person";

import add, { filter } from './lib';

// css-loader
import "./styles.css"

let p = new Person("Emma", 32);
console.log(p.getName(), p.getAge());
let p2 = new Person("Emma", 32);
console.log(p2.getName(), p2.getAge());
var products = [
    { "id": 34, "name": "iPhone 15", "price": 89000.00, "category": "mobile" },
    { "id": 88, "name": "Sony Bravia", "price": 289000.00, "category": "tv" },
    { "id": 65, "name": "Samsung Fold", "price": 310000.00, "category": "mobile" },
    { "id": 23, "name": "Onida KY Thunder", "price": 3000.00, "category": "tv" },
    { "id": 87, "name": "Wacom", "price": 6000.00, "category": "computer" },
    { "id": 33, "name": "SanDisk", "price": 500.00, "category": "computer" }
];

var numbers = [45, 12, 11, 17, 2, 3];

var evens = filter(numbers, e => e % 2 === 0);

var mobiles = filter(products, p => p.category === 'mobile');

console.log(evens);
console.log(mobiles);

let React = {
    createElement: (tag, props, ...children) => {
        let reactElement = { tag, props: { props, children } };
        return reactElement;
    }
}
let product = products[0];

// XML and JS interpolation
let ProductCard = <div className="card" >
    <div className="card-header">{product.name}</div>
    <p>{product.category}, Rs. ${product.price}</p>
</div>

console.log(ProductCard);

function render(reactElement, container) {
    let domElement = document.createElement(reactElement.tag);
    if (['string', 'number'].includes(typeof reactElement)) {
        let txtNode = document.createTextNode(reactElement);
        console.log(txtNode);
        render(txtNode, domElement);
        container.appendChild(txtNode);
         return;
    }
    
    if (reactElement.props) {
        if(reactElement.props.props) {
        Object.keys(reactElement.props.props).filter(prop => !prop.children).forEach(p => {
            domElement[p] = reactElement.props.props[p];
        })
    }
       
        if (reactElement.props.children) {
            reactElement.props.children.forEach(child => render(child, domElement))
        }
    }
    console.log(container);
    container.appendChild(domElement);
}

render(ProductCard, document.getElementById("root"));
