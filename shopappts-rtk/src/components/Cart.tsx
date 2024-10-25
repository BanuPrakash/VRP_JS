import React, { useContext } from 'react'
import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';
import { useAppSelector } from '../redux/store';
import { useAppDispatch } from '../redux/store';
import { clearCart } from '../redux/cartSlice';

export default function Cart() {
  let {cartItems, total} = useAppSelector(state => state.cart);
  let dispatch = useAppDispatch();
  return (
    <Container>
      {
        cartItems.map(product => <CartList product={product} key={product.id}/>)
      }

      <div className='row'>
        <div className='col-md-8'>&nbsp;</div>
        <div className='col-md-4'>Total: {total}</div>
      </div>
      <div className='row'>
        <div className='col-md-8'>&nbsp;</div>
        <div className='col-md-4'>
          <Button variant='primary' onClick={() => dispatch(clearCart())} >Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
