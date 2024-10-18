import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';

export default function ProductList() {
  let [products, setProducts] = useState([]);

  // componentDidMount
  useEffect(() => {
   // axios.get("https://fakestoreapi.com/products?limit=5").then(response => {
    axios.get("http://localhost:1234/products").then(response => {
      setProducts(response.data);
    })
  }, []);

  return (
    <div className='row'>
      {
        products && products.map(product => <ProductCard product={product} key={product.id} />)
      }
    </div>
  )
}
