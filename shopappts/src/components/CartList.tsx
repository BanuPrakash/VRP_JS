import React, { useContext } from 'react'
import CartItem from '../model/CartItem'
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/CartProvider';

type AppProps = {
  product: CartItem
}
export default function CartList(props: AppProps) {
  let {increment} = useContext(CartContext);
  let { id, image, title, price, amount, qty } = props.product;
  return (
    <div className='row'>
      <div className='col-md-2'>
        <img src={image} style={{ 'width': '50px' }} />
      </div>
      <div className='col-md-2'>
        {title}
      </div>
      <div className='col-md-4'>
        <Button> - </Button>
        {qty}
        <Button onClick={() => increment(id)}> + </Button>
      </div>

      <div className='col-md-2'>
        Price: {price}
      </div>
      <div className='col-md-2'>
        Amount: {amount}
      </div>
    </div>
  )
}
