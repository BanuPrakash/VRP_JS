
import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Product } from '../model/Product';

import { useAppDispatch } from '../redux/store';
import { addToCart } from '../redux/cartSlice';

type AppProps = {
    product: Product,
    title: string
}

export default function ProductCard({ product }: AppProps) {
    const dispatch = useAppDispatch();
    let { id, title, price, image, description } = product;

    return (
        <div className='col-md-4'>
            <Card style={{ width: '18rem', height: '50rem', margin: '5px' }}>
                <Link to={`/details/${id}`}>
                    <Card.Img variant="top" src={image} />
                </Link>
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
                        <Button variant='success'
                            onClick={() => dispatch(addToCart(product))}
                        >Add</Button>
                    </span>

                </Card.Footer>
            </Card>
        </div>
    )
}
