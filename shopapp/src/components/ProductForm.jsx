import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// controlled 
// export default function ProductForm() {
//   let navigate = useNavigate();
//   let [title, setTitle] = useState();
//   let [price, setPrice] = useState();

//   function doSubmit() {
//     let product = {
//       title,
//       price,
//       image:  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//     }
//     axios.post("http://localhost:1234/products", product).then(response => {
//         navigate("/");
//     })
//   }
//   return (
//     <div>
//       <h1>Product Form</h1>
//       Title <input type='text' onChange={(evt) => setTitle(evt.target.value)}/> <br />
//       Price <input type='number' onChange={(evt) => setPrice(+evt.target.value)} /> <br />
//       <button type='button' onClick={doSubmit}>Add Product</button>
//     </div>
//   )
// }

// uncontrolled component
export default function ProductForm() {
  let navigate = useNavigate();
  let titleRef = useRef();
  let priceRef = useRef();

  function doSubmit() {
    let product = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      image:  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    }
    axios.post("http://localhost:1234/products", product).then(response => {
        navigate("/");
    })
  }
  return (
    <div>
      <h1>Product Form</h1>
      Title <input type='text' ref={titleRef}/> <br />
      Price <input type='number' ref={priceRef} /> <br />
      <button type='button' onClick={doSubmit}>Add Product</button>
    </div>
  )
}
