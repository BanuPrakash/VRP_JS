import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Details() {
  let [product, setProduct] = useState();
  let { id } = useParams(); // @PathVariable of Spring boot

  // componentDidUpdate but update only if id changes
  useEffect(() => {
    axios.get(`http://localhost:1234/products/${id}`)
      .then(response => {
        setProduct(response.data);
      });
  }, [id]);

  return (
    <div>
      <h1>Product Details</h1>
      {
        product && (
          <div className='row'>
              <div className='col-md-6'>
                <img src={product.image} />
              </div>
              <div className='col-md-6'>
                Title: {product.title} <br />
                Description : {product.desciption} <br />
                Category : {product.category} <br />
                Rating: {product.rating.rate} <br />
                Count: {product.rating.count} <br />
              </div>
          </div>
        )
      }
    </div>
  )
}
