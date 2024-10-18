import React, { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';

export default function Cart() {
  let {cart, total, clearCart} = useContext(CartContext);
  return (
    <Container>
      {
        cart && cart.map(product => <CartList product={product} key={product.id} />)
      }
      <div className='row'>
        <div className='col-md-8'>&nbsp;</div>
        <div className='col-md-4'> Total: {total}</div>
      </div>
      <div className='row'>
        <div className='col-md-8'>&nbsp;</div>
        <div className='col-md-4'> 
          <Button variant='success' onClick={clearCart}>Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
