import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>

 
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
  </React.StrictMode>
);

// ReactDOM.render(
//     <BrowserRouter>
//     <CartProvider>
//       <App />
//     </CartProvider>
//   </BrowserRouter>
// )

