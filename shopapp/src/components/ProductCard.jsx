import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductCard({product}) {
    let {id, title, price, image, description} = product;
    return (
        <div className='col-md-4'>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                Rs. {price} &nbsp;
                <Button variant="primary">Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}
