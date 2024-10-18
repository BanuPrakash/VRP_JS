import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/CartProvider';

export default function ProductCard({ product }) {
    let { id, title, price, image, description } = product;
    let { addToCart } = useContext(CartContext);
    return (
        <div className='col-md-4'>
            <Card style={{ width: '18rem', height: '50rem', margin: '5px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <span className='left'>
                        Rs. {price} &nbsp;
                    </span>
                    <span className='right px-2'>
                        <FontAwesomeIcon icon={faHeart} color="red" />
                        &nbsp;
                        <FontAwesomeIcon icon={faShoppingCart} color="blue"
                            onClick={() => addToCart(product)}
                        />
                    </span>

                </Card.Footer>
            </Card>
        </div>
    )
}
